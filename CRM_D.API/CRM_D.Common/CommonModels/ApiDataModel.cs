using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace CRM_D.Common.CommonModels
{
    public class ApiResponse<T>
    {
        public T Data { get; set; }
        public string StatusMessage { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public int Result { get; set; }
        public string TokenKey { get; set; }
    }
}
