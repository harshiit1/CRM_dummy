using CRM_D.BLL.Interfaces;
using CRM_D.DLL.Entities;
using CRM_D.DLL.Services;

namespace CRM_D.API.Helper
{
    public class InterfaceServices
    {
        public static void AddInterfaceServices(IServiceCollection services)
        {
            services.AddScoped<ErrorLogServices>();
            services.AddScoped<IJwtService, JwtService>();
            services.AddScoped<IAuthentication, AuthenticationServices>();
        }
    }
}
