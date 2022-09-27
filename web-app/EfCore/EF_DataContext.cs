using Microsoft.EntityFrameworkCore;

namespace web_app.EfCore
{
    public class EF_DataContext : DbContext
    {
        public EF_DataContext(DbContextOptions<EF_DataContext> options): base(options) { }


        public DbSet<UsersInfo> UserInfo { get; set; }
    }
}
