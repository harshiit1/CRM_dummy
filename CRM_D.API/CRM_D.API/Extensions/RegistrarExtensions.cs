using CRM_D.API.Registrar;
using CRM_D.API.Registrars;

namespace CRM_D.API.Extensions
{
    public static class RegistrarExtensions
    {
        public static void RegistrarServices(this WebApplicationBuilder builder, Type scanningType)
        {
            var registrars = GetRegistrar<IWebApplicationBuilderRegistrar>(scanningType);
            
            foreach (var registrar in registrars)
            {
                registrar.RegisterServices(builder);
            }
        }
        public static void RegistrarPipelineComponents(this WebApplication app, Type scanningType)
        {
            var registrars = GetRegistrar<IWebApplicationRegistrar>(scanningType);

            foreach (var registrar in registrars)
            {
                registrar.RegisterPipelineComponents(app);
            }
        }
        public static IEnumerable<T> GetRegistrar<T>(Type scanningType) where T: IRegistrar
        {
            return scanningType.Assembly
                .GetTypes()
                .Where(t => t.IsAssignableTo(typeof(T)) && !t.IsAbstract && !t.IsInterface)
                .Select(Activator.CreateInstance)
                .Cast<T>();
        }
    }
}
