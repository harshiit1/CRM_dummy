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
        public string Department { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Status { get; set; }
        public string ContactNo { get; set; }
        public string FullName { get; set; }
        public bool? Working { get; set; }
        public bool? isFirstLogin { get; set; }
        public string Email { get; set; }
        public string Picture { get; set; }
        public string StatusMessage { get; set; }
        public List<NgMenuMaster> UserMenuOptions { get; set; }
    }

    public class UserDetailModel
    {
        public int EmpCode { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Department { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Status { get; set; }
        public DateTime StartDate { get; set; }
    }
}
