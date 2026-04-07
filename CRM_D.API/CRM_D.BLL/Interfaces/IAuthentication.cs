using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Authentication;

namespace CRM_D.BLL.Interfaces
{
    public interface IAuthentication
    {
        public Task<ResponseModel> AddEditUser(UserMaster model);
    }
}
