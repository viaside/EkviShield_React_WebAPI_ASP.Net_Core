using Microsoft.AspNetCore.Mvc;
using web_app.Model;
using web_app.EfCore;
using System.Net.Http.Headers;

namespace web_app.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RegUserController : ControllerBase
    {
        private readonly DbHelper _db;

        public RegUserController(EF_DataContext eF_DataContext)
        {
            _db = new DbHelper(eF_DataContext);
        }

        [Route("Get")]
        [HttpGet]
        public ActionResult Get()
        {
            ResponseType type = ResponseType.Success;
            try
            {
                IEnumerable<UsersInfoModel> data = _db.GetUsers();

                if (!data.Any())
                {
                    type = ResponseType.NotFound;
                }
                return Ok(ResponseHandler.GetAppResponse(type, data));
            }
            catch (Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));
            }
        }

        [Route("GetInfo/{id}")]
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            ResponseType type = ResponseType.Success;
            try
            {
                UsersInfoModel data = _db.GetUsersById(id);

                return Ok(ResponseHandler.GetAppResponse(type, data));
            }
            catch (Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));
            }
        }

        [Route("Login")]
        [HttpPost]
        public IActionResult UserLogin(UserLogin userLogin)
        {
            HttpResponseMessage respMessage = new HttpResponseMessage();

            try
            {
                var CheckUserLogin = _db.LoginUser(userLogin);
                if (CheckUserLogin.Success == true)
                {
                    var cookieOptions = new CookieOptions
                    {
                        HttpOnly = false,
                        SameSite = SameSiteMode.None,
                        Secure = true
                    };
                    Response.Cookies.Append("Id", CheckUserLogin.Id.ToString(), cookieOptions);
                    Response.Cookies.Append("UserLogin", CheckUserLogin.Login, cookieOptions);
                    ResponseType type = ResponseType.Success;
                    return Ok(ResponseHandler.GetAppResponse(type, CheckUserLogin.Id));
                }
                else
                {
                    throw new InvalidOperationException("Invalid User");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));
            }
        }


        [Route("Registr")]
        [HttpPost]
        public IActionResult Regists([FromBody] UsersInfoModel model)
        {
            try
            {
                ResponseType responseType = ResponseType.Success;
                _db.SaveUser(model);
                return Ok(ResponseHandler.GetAppResponse(responseType, model));
            }
            catch(Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));
            }
        }

        [Route("DeleteUser/{id}")]
        [HttpPost("{id}")]
        public IActionResult DeleteUser(int id)
        {
            ResponseType type = ResponseType.Success;
            try
            {
                _db.DeleteUser(id);
                return Ok(ResponseHandler.GetAppResponse(type, id));
            }
            catch(Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));
            }
        }

    }
}
