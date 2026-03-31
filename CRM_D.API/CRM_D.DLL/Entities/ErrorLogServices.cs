using Dapper;
using CRM_D.BLL.Entities;
using CRM_D.Common.CommonModels;
using CRM_D.DLL.Dapper;

namespace CRM_D.DLL.Entities
{
    public class ErrorLogServices: IErrorLog
    {
        public void InsertErrorLog(ErrorLogModel _errorLog)
        {
            var param = new DynamicParameters();
            DapperExecuteServiceFromAnyDB<string> svr = new DapperExecuteServiceFromAnyDB<string>(new ConnectionFromStringModel());
            string procName = "Proc_ErrorLogs_Insert";
            svr.ExecuteSqlStoredProcedure(procName, _errorLog);
        }

        public void InsertErrorLog(Exception _exception, string _path)
        {
            throw new NotImplementedException();
        }
    }
}
