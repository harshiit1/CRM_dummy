using CRM_D.BLL.Entities;
using CRM_D.Common.CommonModels;
using CRM_D.DLL.Entities;
using CRM_D.DLL.Services;
using Dapper;
using System.Data;

namespace CRM_D.DLL.Dapper
{
    public class DapperExecuteServiceFromAnyDB<T>: BaseDapperService, IDapperExecuteServiceFromAnyDB<T> 
    {
        private IDbConnection _db = null;
        private string _connectionString;
        ErrorLogServices _errorLog;
        
        public DapperExecuteServiceFromAnyDB() : base()
        {
            _db = DataLayer.CreateDynamicDataBaseConnection(ConnectionString);
            _errorLog = new ErrorLogServices();
        }

        public DapperExecuteServiceFromAnyDB(ConnectionFromStringModel model)
        {
            _connectionString = model.ToString();
            _db = DataLayer.CreateDynamicDataBaseConnection(_connectionString);
            _errorLog = new ErrorLogServices();
        }


        public T ExecuteSingleObjectSqlQuery(string sqlQuery, object qParams = null)
        {
            T totalRecords = default(T);
            try
            {
                totalRecords = this._db.Query<T>(sqlQuery, param: qParams, commandType: CommandType.Text, commandTimeout: iCommandTimeoutSeconds).FirstOrDefault();
            }
            catch (Exception ex)
            {
                string path = "sqlQuery";
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = path,
                    Error_Trace = ex.StackTrace
                });
            }
            return totalRecords;
        }

        public List<T> ExecuteSqlQuery(string sqlQuery)
        {
            List<T> totalRecords = new List<T>();
            try
            {
                totalRecords = this._db.Query<T>(sqlQuery, commandType: CommandType.Text, commandTimeout: iCommandTimeoutSeconds).ToList();
            }
            catch (Exception ex)
            {
                string path = "sqlQuery";
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = path,
                    Error_Trace = ex.StackTrace
                });
            }
            return totalRecords;
        }

        public List<T> ExecuteSqlQuery(string sqlQuery, object qParams = null)
        {
            List<T> totalRecords = new List<T>();
            try
            {
                totalRecords = this._db.Query<T>(sqlQuery, param: qParams, commandType: CommandType.Text, commandTimeout: iCommandTimeoutSeconds).ToList();
            }
            catch (Exception ex)
            {

                string path = "sqlQuery";
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = path,
                    Error_Trace = ex.StackTrace
                });
            }
            return totalRecords;
        }

        public List<T> ExecuteSqlStoredProcedure(string procName, object procParams = null)
        {
            List<T> totalRecords = new List<T>();
            try
            {
                totalRecords = this._db.Query<T>(procName, procParams, commandType: CommandType.StoredProcedure, commandTimeout: iCommandTimeoutSeconds).ToList();
            }
            catch (Exception ex)
            {

                string path = procName;
                if (procName != "Proc_ErrorLogs_Insert")
                {
                    _errorLog.InsertErrorLog(new ErrorLogModel()
                    {
                        IsDBError = false,
                        Error_Message = ex.Message,
                        Error_Procedure = path,
                        Error_Trace = ex.StackTrace
                    });
                }
            }
            return totalRecords;
        }
        public T ExecuteSingleObjectStoredProcedure(string procName, object procParams = null)
        {
            T singleModel = default(T);
            try
            {
                singleModel = this._db.Query<T>(procName, procParams, commandType: CommandType.StoredProcedure, commandTimeout: iCommandTimeoutSeconds).FirstOrDefault();
            }
            catch (Exception ex)
            {

                string path = procName;
                if (procName != "Proc_ErrorLogs_Insert")
                {
                    _errorLog.InsertErrorLog(new ErrorLogModel()
                    {
                        IsDBError = false,
                        Error_Message = ex.Message,
                        Error_Procedure = path,
                        Error_Trace = ex.StackTrace
                    });
                }
            }
            return singleModel;
        }

        public int ExecuteSQL(string sql)
        {
            int iResult = -1;
            try
            {
                CommandDefinition cmd = new CommandDefinition(commandText: sql, commandType: CommandType.Text, commandTimeout: iCommandTimeoutSeconds);
                iResult = this._db.Execute(cmd);
            }
            catch (Exception ex)
            {
                iResult = -1;

                string path = "sqlQuery";
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = path,
                    Error_Trace = ex.StackTrace
                });
            }
            return iResult;
        }
        public T ExecuteCRUDSP(string procName, object procParams = null)
        {
            T totalRecords = default(T);
            try
            {
                totalRecords = this._db.Query<T>(procName, procParams, commandType: CommandType.StoredProcedure, commandTimeout: iCommandTimeoutSeconds).FirstOrDefault();
            }
            catch (Exception ex)
            {
                string path = procName;
                if (procName != "Proc_ErrorLogs_Insert")
                {
                    _errorLog.InsertErrorLog(new ErrorLogModel()
                    {
                        IsDBError = false,
                        Error_Message = ex.Message,
                        Error_Procedure = path,
                        Error_Trace = ex.StackTrace
                    });
                }
            }
            return totalRecords;
        }
    }


    public class BaseDapperService
    {
        protected int iCommandTimeoutSeconds = 3600;
        protected string ConnectionString;
        private string _userName;

        public BaseDapperService()
        {
            ConnectionString = ConnectionStringManager.GetAdminConnectionString();

        }
    }

    public interface IDapperExecuteServiceFromAnyDB<T>
    {
        T ExecuteSingleObjectSqlQuery(string sqlQuery, object qParams = null);
        List<T> ExecuteSqlQuery(string sqlQuery);
        List<T> ExecuteSqlQuery(string sqlQuery, object qParams = null);
        List<T> ExecuteSqlStoredProcedure(string procName, object procParams = null);
        int ExecuteSQL(string sql);
        T ExecuteCRUDSP(string procName, object procParams = null);
    }

    public class ConnectionFromStringModel
    {
        private string _connectionString;
        public ConnectionFromStringModel()
        {
            _connectionString = ConnectionStringManager.GetAdminConnectionString();
        }

        public override string ToString()
        {
            return this._connectionString;
        }
    }
}
