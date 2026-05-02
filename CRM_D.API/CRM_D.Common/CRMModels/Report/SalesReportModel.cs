using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.Common.CRMModels.Report
{
    public class SalesReportModel
    {
        public int Id { get; set; }

        public string Area { get; set; }

        public string CompName { get; set; }

        public int? January { get; set; }

        public int? February { get; set; }

        public int? March { get; set; }

        public int? April { get; set; }

        public int? May { get; set; }

        public int? June { get; set; }

        public int? July { get; set; }

        public int? August { get; set; }

        public int? Total { get; set; }
    }
}
