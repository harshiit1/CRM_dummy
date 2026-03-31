using CRM_D.DLL.Services;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace CRM_D.DLL.Dapper
{
    public class DataLayer
    {
        public static SqlConnection sqlCreateConnection()
        {
            ConnectionStringManager conn = new ConnectionStringManager();
            SqlConnection _db = new SqlConnection(conn.GetAdminString());
            return _db;
        }

        public static IDbConnection CreateDynamicDataBaseConnection(string connectionString)
        {
            IDbConnection _db = new SqlConnection(connectionString);
            return _db;
        }
    }
}
