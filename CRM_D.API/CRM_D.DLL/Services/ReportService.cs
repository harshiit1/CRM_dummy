using CRM_D.BLL.Entities;
using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Report;
using CRM_D.DLL.Dapper;
using CRM_D.DLL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.DLL.Services
{
    public class ReportService: IReport
    {
        private readonly ErrorLogServices _errorLog;

        public ReportService(ErrorLogServices errorLog)
        {
            _errorLog = errorLog;
        }
        public async Task<List<SalesReportModel>> GetCompanyMonthlyReportData()
        {
            List<SalesReportModel> returnData = new List<SalesReportModel>(); 
            try {
                string ProcName = "USP_GetCompanyMonthlySaleData";
                IDapperExecuteServiceFromAnyDB<SalesReportModel> svr = new DapperExecuteServiceFromAnyDB<SalesReportModel>();
                returnData = svr.ExecuteSqlStoredProcedure(ProcName);
            }
            catch(Exception ex)
            {
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = "proc:USP_GetCompanyMonthlySaleData",
                    Error_Trace = ex.StackTrace
                });
            }
            return returnData;
        }

        public async Task<List<QuotationReportModel>> GetQuotationReportData()
        {
            List<QuotationReportModel> returnData = new List<QuotationReportModel>();
            try
            {
                string ProcName = "USP_GetQuotationReportData";
                IDapperExecuteServiceFromAnyDB<QuotationReportModel> svr = new DapperExecuteServiceFromAnyDB<QuotationReportModel>();
                returnData = svr.ExecuteSqlStoredProcedure(ProcName);
            }
            catch (Exception ex)
            {
                _errorLog.InsertErrorLog(new ErrorLogModel()
                {
                    IsDBError = false,
                    Error_Message = ex.Message,
                    Error_Procedure = "proc:USP_GetQuotationReportData",
                    Error_Trace = ex.StackTrace
                });
            }
            return returnData;
        }
    }
}
