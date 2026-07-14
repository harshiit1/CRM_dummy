using CRM_D.API.Registrars;
using CRM_D.BLL.Interfaces;
using CRM_D.DLL.Entities;
using CRM_D.DLL.Services;

namespace CRM_D.API.Registrar
{
    public class MvcRegistrar : IWebApplicationBuilderRegistrar
    {
        public void RegisterServices(WebApplicationBuilder builder)
        {
            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddScoped<ErrorLogServices>();
            builder.Services.AddScoped<IAuthentication, AuthenticationServices>();
            builder.Services.AddScoped<IUser, UserService>();
            builder.Services.AddScoped<IReport, ReportService>();
        }
    }
}
