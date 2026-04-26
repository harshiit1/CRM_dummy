using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.Common.CommonModels
{
    public class ErrorLogModel
    {
        public bool IsDBError { get; set;  }
        public string Error_Message { get; set; }
        public string Error_Procedure { get; set; }
        public string Error_Trace { get; set; }
    }
}
