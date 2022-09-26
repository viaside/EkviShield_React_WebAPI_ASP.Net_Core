using System.Data.SqlTypes;

namespace web_app.Model
{
    public class UsersInfoModel
    {
        public int Id { get; set; }
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;   
        public DateTime DateOfBirth { get; set; }   
    }

    public class GetInfoInResponse
    {
        public bool Success { get; set; }
    }
}
