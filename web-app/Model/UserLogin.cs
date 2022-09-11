namespace web_app.Model
{
    public class UserLogin
    {
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class SignInResponse
    {
        public bool Success { get; set; } 
    }
}
