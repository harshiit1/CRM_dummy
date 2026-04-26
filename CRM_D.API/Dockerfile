# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /app

COPY . ./

WORKDIR /app/CRM_D.API

RUN dotnet restore

RUN dotnet publish -c Release -o out

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0

WORKDIR /app

COPY --from=build /app/CRM_D.API/out ./

ENV ASPNETCORE_URLS=http://+:10000

EXPOSE 10000    

ENTRYPOINT ["dotnet", "CRM_D.API.dll"]
