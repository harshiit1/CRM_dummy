using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Report;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CRM_D.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportController: Controller
    {
        private IReport _reportBLL;
        public ReportController(IReport report) 
        { 
            this._reportBLL = report;   
        }

        [HttpGet]
        [Route("GetCompanySaleReport")]
        public async Task<IActionResult> GetCompanySaleReport()
        {
            string StatusMessage = string.Empty;
            ApiResponse<List<SalesReportModel>> ApiResponse = new ApiResponse<List<SalesReportModel>>();
            List<SalesReportModel> response = await _reportBLL.GetCompanyMonthlyReportData();
            if(response != null)
            {
                StatusMessage = "Data Fetched Successfully";
            }
            ApiResponse = new ApiResponse<List<SalesReportModel>> { Data = response, StatusMessage = StatusMessage, Result = 1, StatusCode =HttpStatusCode.OK };
            return Ok(ApiResponse);
        }

        [HttpGet]
        [Route("GetQuotationReport")]
        public async Task<IActionResult> GetQuotationReport()
        {
            string StatusMessage = string.Empty;
            ApiResponse<List<QuotationReportModel>> ApiResponse = new ApiResponse<List<QuotationReportModel>>();
            List<QuotationReportModel> response = await _reportBLL.GetQuotationReportData();
            if (response != null)
            {
                StatusMessage = "Data Fetched Successfully";
            }
            ApiResponse = new ApiResponse<List<QuotationReportModel>> { Data = response, StatusMessage = StatusMessage, Result = 1, StatusCode = HttpStatusCode.OK };
            return Ok(ApiResponse);
        }
    }
}
