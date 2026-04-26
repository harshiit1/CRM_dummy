using CRM_D.Common.CommonModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.BLL.Entities
{
    public interface IErrorLog
    {
        public void InsertErrorLog(ErrorLogModel _errorLog);
        public void InsertErrorLog(Exception _exception, string _path);
    }
}
