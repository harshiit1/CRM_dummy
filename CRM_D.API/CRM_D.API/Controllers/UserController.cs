using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.User;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CRM_D.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class UserController: ControllerBase
    {
        private IUser _userBLL;
        public UserController(IUser user) {
            this._userBLL = user;
        }
        [HttpPost]
        [Route("SaveEditUserDetails")]
        public async Task<IActionResult> SaveEditUserDetails([FromBody] UserDetailModel model)
        {
            ResponseModel response = new ResponseModel();
            response = await _userBLL.SaveEditUserDetail(model);
            ApiResponse<ResponseModel> ApiResponse = new ApiResponse<ResponseModel>() { Data = response, StatusMessage=response.ResponseMessage, StatusCode=HttpStatusCode.OK, Result = 1 };
            return Ok(ApiResponse);
        }
    }
}
