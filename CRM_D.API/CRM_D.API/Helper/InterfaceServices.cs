using CRM_D.BLL.Interfaces;
using CRM_D.DLL.Services;

namespace CRM_D.API.Helper
{
    public class InterfaceServices
    {
        public static void AddInterfaceServices(IServiceCollection services)
        {
            services.AddSingleton<IAuthentication, AuthenticationServices>();
        }
    }
}
