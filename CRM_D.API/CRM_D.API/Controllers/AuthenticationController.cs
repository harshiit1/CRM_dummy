using CRM_D.BLL.Interfaces;
using CRM_D.Common.CommonModels;
using CRM_D.Common.CRMModels.Authentication;
using CRM_D.Common.CRMModels.User;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Security.Claims;

namespace CRM_D.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class AuthenticationController : ControllerBase
    {
        private IAuthentication _authInfoBLL;
        public IConfiguration _configuration;
        private IJwtService _jwtService;

        public AuthenticationController(IAuthentication authInfo, IConfiguration configuration, IJwtService jwtService)
        {
            this._authInfoBLL = authInfo;
            this._configuration = configuration;
            this._jwtService = jwtService;
        }

        [HttpPost]
        [Route("AddEditUserDetails")]
        public async Task<IActionResult> AddEditUserDetails([FromBody] UserMaster model)
        {
            string StatusMessage = string.Empty;
            ApiResponse<ResponseModel> ApiResponse = new ApiResponse<ResponseModel>();
            ResponseModel response = new ResponseModel();
            response = await _authInfoBLL.AddEditUser(model);
            if(response == null)
            {
                return BadRequest("UserName Already Exists");
            }
            StatusMessage = "Data has been Saved Successfully";
            ApiResponse = new ApiResponse<ResponseModel> { Data = response, StatusMessage = StatusMessage, Result = 1, StatusCode = HttpStatusCode.OK };

            return Ok(ApiResponse);
        }

        [HttpPost]
        [Route("SignInUser")]
        public async Task<IActionResult> SignInUser([FromBody] SignInModel model)
        {
            UserInfoDataModel userInfoData = new UserInfoDataModel();
            ApiResponse<UserInfoDataModel> ApiResponse = new ApiResponse<UserInfoDataModel>();
            ApiResponse = new ApiResponse<UserInfoDataModel> { Data = userInfoData, StatusMessage = "", Result = 1, StatusCode = HttpStatusCode.OK };

            if (string.IsNullOrEmpty(model.UserName))
            {
                userInfoData.StatusMessage = "Please enter Username";
                ApiResponse = new ApiResponse<UserInfoDataModel> { Data = userInfoData, StatusCode = HttpStatusCode.BadRequest, StatusMessage = userInfoData.StatusMessage, Result = -1 };
                return BadRequest(ApiResponse);
            }
            else if (string.IsNullOrEmpty(model.Password))
            {
                userInfoData.StatusMessage = "Please enter password.";
                ApiResponse = new ApiResponse<UserInfoDataModel> { Data = userInfoData, StatusCode = HttpStatusCode.BadRequest, StatusMessage = userInfoData.StatusMessage, Result = -2 };
                return BadRequest(ApiResponse);
            }
           
            userInfoData = await _authInfoBLL.doLogin(model);
            if (userInfoData == null) return null;
            var token = _jwtService.GenerateAccessToken(userInfoData.UserName, userInfoData.Designation);
            string StatusMessage = "Data Fetched Successfully";
            ApiResponse = new ApiResponse<UserInfoDataModel> { Data = userInfoData, StatusMessage = StatusMessage, Result = 1, StatusCode = HttpStatusCode.OK, TokenKey = token};

            return Ok(ApiResponse);
        }
    }
}
