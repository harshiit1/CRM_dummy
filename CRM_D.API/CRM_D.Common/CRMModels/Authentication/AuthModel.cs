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

        public string? MobieNo { get; set; }

        public string Designation { get; set; }

        public string Department { get; set; }

        public string? Address { get; set; }
        public int? IsActive { get; set;  }
        public string Flag { get; set; }
    }
}