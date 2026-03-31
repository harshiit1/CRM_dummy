using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Authentication;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.BLL.Interfaces
{
    public interface IAuthentication
    {
        public ResponseModel AddEditUser(UserMaster model);
    }
}
