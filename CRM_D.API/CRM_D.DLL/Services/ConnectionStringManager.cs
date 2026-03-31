using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.DLL.Services
{
    public class ConnectionStringManager
    {
        public static string ConnectionString;

        public static string GetAdminConnectionString()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json");
            return builder.Build().GetSection("ConnectionStrings").GetSection("AdminConnection").Value;
        }
        public string GetAdminString()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json");
            return builder.Build().GetSection("ConnectionStrings").GetSection("AdminConnection").Value;
        }
    }
}
