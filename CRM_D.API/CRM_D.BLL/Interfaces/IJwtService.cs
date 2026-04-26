using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.BLL.Interfaces
{
    public interface IJwtService
    {   
        string GenerateAccessToken(string userName, string role);
        string GenerateRefreshToken();
    }
}
