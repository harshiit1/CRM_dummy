using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Authentication;
using CRM_D.Common.CRMModels.User;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CRM_D.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class AuthenticationController : ControllerBase
    {
        private IAuthentication _authInfoBLL;
        public IConfiguration _configuration;

        public AuthenticationController(IAuthentication authInfo, IConfiguration configuration)
        {
            this._authInfoBLL = authInfo;
            this._configuration = configuration;
        }

        //[HttpPost]
        //[Route("doLogin")]
        //public async Task<IActionResult> SignInApi([FromBody] SignInModel model)
        //{
        //    string StatusMessage = string.Empty;
        //    return false;
        //}

        [HttpPost]
        [Route("AddEditUserDetails")]
        public async Task<IActionResult> AddEditUserDetails(UserMaster model)
        {
            string StatusMessage = string.Empty;
            ApiResponse<ResponseModel> ApiResponse = new ApiResponse<ResponseModel>();
            ResponseModel response = new ResponseModel();
            response = _authInfoBLL.AddEditUser(model);
            ApiResponse = new ApiResponse<ResponseModel> { Data = response , StatusMessage = "Data fetched Successfully", Result = 1, StatusCode = HttpStatusCode.OK };

            return Ok(ApiResponse);
        }

    }
}
