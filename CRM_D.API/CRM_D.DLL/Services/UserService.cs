using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.User;
using CRM_D.DLL.Dapper;
using CRM_D.DLL.Entities;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.DLL.Services
{
    public class UserService :IUser
    {
        private readonly ErrorLogServices _errorLog;

        public UserService(ErrorLogServices errorLog)
        {
            _errorLog = errorLog;
        }
        public async Task<ResponseModel> SaveEditUserDetail(UserDetailModel model)
        {
            ResponseModel returnData = new ResponseModel();
            try
            {
                string procName = "USP_AddEditUserDetails";
                var param = new DynamicParameters();
                param.Add("EmpCode", model.EmpCode);
                param.Add("Email", model.Email);
                param.Add("Address", model.Address); 
                param.Add("City", model.City); 
                param.Add("State", model.State);
                param.Add("Phone", model.Phone);
                param.Add("Department", model.Department);
                param.Add("StartDate", model.StartDate);

                IDapperExecuteServiceFromAnyDB<ResponseModel> svr = new DapperExecuteServiceFromAnyDB<ResponseModel>();
                returnData = svr.ExecuteCRUDSP(procName, param);
            }
            catch(Exception ex)
            {
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = "proc:USP_AddEditUserDetails",
                    Error_Trace = ex.StackTrace
                });
            }
            return returnData;
        }
    }
}
