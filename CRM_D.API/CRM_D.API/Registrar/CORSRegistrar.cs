using CRM_D.API.Registrars;

namespace CRM_D.API.Registrar
{
    public class CORSRegistrar : IWebApplicationBuilderRegistrar
    {
        private const string PolicyName = "MyPolicy";
        public void RegisterServices(WebApplicationBuilder builder)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(PolicyName, policy =>
                {
                    policy.WithOrigins(
                        builder.Configuration
                        .GetSection("Cors:AllowedOrigins")
                        .Get<string[]>()
                        ?? Array.Empty<string>()
                    )
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
                });
            });
        }
    }
}
