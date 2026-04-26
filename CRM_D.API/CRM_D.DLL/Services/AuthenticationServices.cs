using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Authentication;
using CRM_D.Common.CRMModels.User;
using CRM_D.DLL.Dapper;
using CRM_D.DLL.Entities;
using Dapper;
using Microsoft.Identity.Client;
namespace CRM_D.DLL.Services
{
    public class AuthenticationServices : IAuthentication
    {
        private readonly ErrorLogServices _errorLog;

        public AuthenticationServices(ErrorLogServices errorLog)
        {
            _errorLog = errorLog;
        }
        public async Task<ResponseModel> AddEditUser(UserMaster model)
        {
            string procName = "USP_AddEditUserLogin";
            ResponseModel returnData = new ResponseModel();
            try
            {
                model.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);
                var param = new DynamicParameters();
                param.Add("Email", model.Email);
                param.Add("Password", model.Password);
                param.Add("UserName", model.UserName);
                param.Add("Designation", model.Designation);
                param.Add("IsActive", model.IsActive);

                IDapperExecuteServiceFromAnyDB<ResponseModel> svr = new DapperExecuteServiceFromAnyDB<ResponseModel>();
                returnData = svr.ExecuteCRUDSP(procName, param);
            }
            catch (Exception ex)
            {
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = "proc:USP_AddEditUserLogin",
                    Error_Trace = ex.StackTrace
                });
                return new ResponseModel
                {
                    StatusCode = 0,
                    ResponseMessage = "Internal server error"
                };

            }
            return returnData;
        }
        public async Task<UserInfoDataModel> doLogin(SignInModel model)
        {
            string procName = "USP_LoginUser";
            LoginUserModel userLogin = new LoginUserModel();
            UserInfoDataModel returnData = new UserInfoDataModel();
            try
            {
                var param = new DynamicParameters();
                param.Add("UserName", model.UserName);
                IDapperExecuteServiceFromAnyDB<LoginUserModel> svr = new DapperExecuteServiceFromAnyDB<LoginUserModel>();
                userLogin = svr.ExecuteCRUDSP(procName, param);

                bool isValid = BCrypt.Net.BCrypt.Verify(model.Password, userLogin.PasswordHash);

                if (isValid)
                {
                    string procedureName = "USP_GetUserProfile";
                    var para = new DynamicParameters();
                    para.Add("EmpCode", userLogin.EmpCode);
                    IDapperExecuteServiceFromAnyDB<UserInfoDataModel> exs = new DapperExecuteServiceFromAnyDB<UserInfoDataModel>();
                    returnData = exs.ExecuteCRUDSP(procedureName, para);
                }
            }
            catch (Exception ex)
            {
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = "proc:USP_AddEditUserLogin",
                    Error_Trace = ex.StackTrace
                });
            }
            return returnData;
        }
    }
}
