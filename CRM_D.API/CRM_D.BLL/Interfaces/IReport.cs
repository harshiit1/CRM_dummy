using CRM_D.Common.CRMModels.Report;
using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.BLL.Interfaces
{
    public interface IReport
    {
        public Task<List<SalesReportModel>> GetCompanyMonthlyReportData();
        public Task<List<QuotationReportModel>> GetQuotationReportData();
    }
}
