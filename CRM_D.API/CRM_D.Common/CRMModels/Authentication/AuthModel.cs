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

    public class UserMaster
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }
        public string Role { get; set; }
        public string Department { get; set; }
        public int? IsActive { get; set;  }
    }
}