using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Authentication;
using CRM_D.Common.CRMModels.User;

namespace CRM_D.BLL.Interfaces
{
    public interface IAuthentication
    {
        public Task<ResponseModel> AddEditUser(UserMaster model);
        public Task<UserInfoDataModel> doLogin(SignInModel model);
    }
}
