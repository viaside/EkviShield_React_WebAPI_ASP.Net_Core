namespace web_app.Model
{
    public class UsersInfoModel
    {
        public int id { get; set; }
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;   
        public DateTime DateOfBirth { get; set; }   
    }
}
