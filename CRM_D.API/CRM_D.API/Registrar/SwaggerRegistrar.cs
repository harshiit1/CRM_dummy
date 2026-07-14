using CRM_D.API.Registrars;
using Microsoft.OpenApi;

namespace CRM_D.API.Registrar
{
    public class SwaggerRegistrar : IWebApplicationBuilderRegistrar
    {
        public void RegisterServices(WebApplicationBuilder builder)
        {
            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "CRM API",
                    Description = "Customer Relationship Management System API"
                });
            });
        }
    }
}
