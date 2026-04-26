using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.Common.CRMModels.Authentication
{
    public class SignInModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
    public class LoginUserModel
    {
        public string UserName { get; set; }
        public string PasswordHash { get; set; } // fetched from DB
        public int EmpCode { get; set; }
        public bool IsActive { get; set; }
    }
    public class UserMaster
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }
        public string Designation { get; set; }
        public int? IsActive { get; set;  }
    }
}