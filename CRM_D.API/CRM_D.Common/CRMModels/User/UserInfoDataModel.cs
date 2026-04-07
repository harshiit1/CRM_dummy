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
        public int EmpCode { get; set; }
        public string EmpName { get; set; }
        public string Designation { get; set; }
        public string ContactNo { get; set; }
        public string ADD1 { get; set; }
        public string ADD2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string HomePh { get; set; }
        public bool? Working { get; set; }
        public string Email { get; set; }
        public string Picture { get; set; }
        public string StatusMessage { get; set; }
        public List<NgMenuMaster> UserMenuOptions { get; set; }
    }
}
