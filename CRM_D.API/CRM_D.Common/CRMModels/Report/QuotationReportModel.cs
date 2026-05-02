using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.Common.CRMModels.Report
{
    public class QuotationReportModel
    {     
        public int Quot_id { get; set; }

        public string Comp_name { get; set; }

        public string Person_name { get; set; }

        public string Contact_no { get; set; }

        public int? Biz_code { get; set; }

        public string New_biz { get; set; }

        public string Biz_no { get; set; }

        public string Excise { get; set; }

        public string CST { get; set; }

        public string Pmt_terms { get; set; }

        public string Freight { get; set; }

        public string Delivery { get; set; }

        public string Shipping { get; set; }

        public string LeadTime { get; set; }

        public string Quot_stage { get; set; }

        public string QuotType { get; set; }

        public bool? Approved { get; set; }

        public int? ApprovedBy { get; set; }

        public DateTime? ApprovedOn { get; set; }

        public DateTime? createdon { get; set; }

        public DateTime? Modifiedon { get; set; }

        public int? QuotStatus { get; set; }

        public string PI_PlantCode { get; set; }

        public int? BrandId { get; set; }

        public bool? IsQuotationItemUpdated { get; set; }

        public int? comp_code { get; set; }

        public int? Sr_no { get; set; }

        public int? categoryId { get; set; }

        public string category { get; set; }

        public int? prodId { get; set; }

        public string product { get; set; }

        public string grade { get; set; }

        public string unit { get; set; }

        public decimal? EstQty { get; set; }

        public decimal? Price { get; set; }

        public string Currency { get; set; }

        public string remarks { get; set; }

        public string HSNCode { get; set; }

        public decimal? GSTRate { get; set; }

        public int? EmpCode { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

    }
}
