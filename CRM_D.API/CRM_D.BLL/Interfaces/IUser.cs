using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.User;

namespace CRM_D.BLL.Interfaces
{
    public interface IUser
    {
        public Task<ResponseModel> SaveEditUserDetail(UserDetailModel model);
    }
}
