using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Authentication;
using CRM_D.DLL.Dapper;
using CRM_D.DLL.Entities;
using Dapper;
namespace CRM_D.DLL.Services
{
    public class AuthenticationServices : IAuthentication
    {
        private ErrorLogServices _errorLog;

        public AuthenticationServices()
        {
            _errorLog = new ErrorLogServices();
        }
        public ResponseModel AddEditUser(UserMaster model)
        {
            string procName = "USP_AddEditUserLogin";
            ResponseModel returnData = new ResponseModel();
            try
            {
                var param = new DynamicParameters();
                param.Add("Email", model.Email);
                param.Add("Password", model.Password);
                param.Add("UserName", model.UserName);
                param.Add("Department", model.Department);
                param.Add("Designation", model.Designation);
                param.Add("MobileNo", model.MobieNo);
                param.Add("Address", model.Address);
                param.Add("IsActive", model.IsActive);
                param.Add("Flag", model.Flag);

                IDapperExecuteServiceFromAnyDB<ResponseModel> svr = new DapperExecuteServiceFromAnyDB<ResponseModel>();
                returnData = svr.ExecuteCRUDSP(procName, param);
            }
            catch (Exception ex)
            {
                string path = "proc:USP_AddEditUserLogin";
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = path,
                    Error_Trace = ex.StackTrace
                });

            }
            return returnData;
        }
    }
}
