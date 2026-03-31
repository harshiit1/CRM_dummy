using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.Common.CommonModels
{
    public class ResponseModel
    {
        public string ResponseMessage { get; set; }
        public string StatusMessage { get; set; }
        public int ResponseId { get; set; }
        public int IsSuccess { get; set; }
        public int StatusCode { get; set; }
    }
}
