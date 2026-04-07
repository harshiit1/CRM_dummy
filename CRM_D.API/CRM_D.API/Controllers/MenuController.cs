using CRM_D.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.Design;

namespace CRM_D.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : Controller
    {
        private IMenu _menu;
        public MenuController(IMenu menu)
        {
            this._menu = menu;
        }

        //[HttpGet]
        //[Route("GetMenuAccess")]

    }
}
