# CRM Dummy — Multi-stage Dockerfile
# Builds both CRM_D.API and CRM_D.WEB and runs the API.

# Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution files and restore dependencies first (layer cache)
COPY ["CRM_D.API/", "CRM_D.API/"]
COPY ["CRM_D.WEB/", "CRM_D.WEB/"]

# Restore NuGet packages
RUN dotnet restore "CRM_D.API/CRM_D.API.csproj"
RUN dotnet restore "CRM_D.WEB/CRM_D.WEB.csproj"

# Build API
WORKDIR /src/CRM_D.API
RUN dotnet build "CRM_D.API.csproj" -c Release -o /app/build/api

# Build Web
WORKDIR /src/CRM_D.WEB
RUN dotnet build "CRM_D.WEB.csproj" -c Release -o /app/build/web

# Publish
FROM build AS publish

WORKDIR /src/CRM_D.API
RUN dotnet publish "CRM_D.API.csproj" -c Release -o /app/publish/api --no-restore

WORKDIR /src/CRM_D.WEB
RUN dotnet publish "CRM_D.WEB.csproj" -c Release -o /app/publish/web --no-restore

# Runtime (API) 
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy published API output
COPY --from=publish /app/publish/api .

# Copy published Web output alongside (served via API or separately)
COPY --from=publish /app/publish/web ./web

# Expose the default ASP.NET Core port
EXPOSE 8080

# Set environment to Production; override at runtime for dev/staging
ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_URLS=http://+:8080

# Health check — adjust the path to match your API's health endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD curl -f http://localhost:8080/health || exit 1

ENTRYPOINT ["dotnet", "CRM_D.API.dll"]
