using Microsoft.AspNetCore.Mvc;
using web_app.Model;
using web_app.EfCore;

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
        public SignInResponse UserLogin(UserLogin userLogin)
        {
            return _db.LoginUser(userLogin);
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
    }
}
