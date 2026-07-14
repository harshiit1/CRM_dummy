using CRM_D.API.Registrar;

namespace CRM_D.API.Registrars
{
    public interface IWebApplicationBuilderRegistrar : IRegistrar
    {
        public void RegisterServices(WebApplicationBuilder builder);
    }
}
