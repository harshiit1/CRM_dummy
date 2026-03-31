using CRM_D.Common.CRMModels.Menu;
using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.Common.CRMModels.User
{
    public class UserInfoDataModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public decimal EMP_CODE { get; set; }
        public string EMP_NAME { get; set; }
        public string DESIGNATION { get; set; }
        public string CONTACT_NO { get; set; }
        public string ADD1 { get; set; }
        public string ADD2 { get; set; }
        public string CITY { get; set; }
        public string STATE { get; set; }
        public string HOMEPH { get; set; }
        public bool? WORKING { get; set; }
        public string EMAIL_ADD { get; set; }
        public string PICTURE { get; set; }
        public string StatusMessage { get; set; }
        public List<NgMenuMaster> UserMenuOptions { get; set; }
    }
}
