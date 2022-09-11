using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Npgsql.EntityFrameworkCore.PostgreSQL.Infrastructure.Internal;
using System.Data;
using System.Web.Http.Results;
using web_app.EfCore;
using web_app.Model;

namespace web_app.Model
{
    public class DbHelper
    {
        private EF_DataContext _context;
        public DbHelper(EF_DataContext context)
        {
            _context = context;
        }
        /// <summary>
        /// GET
        /// </summary>
        /// <returns></returns>
        public List<UsersInfoModel> GetUsers()
        {
            List<UsersInfoModel> response = new List<UsersInfoModel>();
            var dataList = _context.UserInfo.ToList();
            dataList.ForEach(row => response.Add(new UsersInfoModel()
            {
                id = row.id,
                Login = row.Login,
                Password = row.Password,
                Email = row.Email,
                DateOfBirth = row.DateOfBirth
            }));
            return response;
        }

        public UsersInfoModel GetUsersById(int id)
        {
            UsersInfoModel response = new UsersInfoModel();
            var row = _context.UserInfo.Where(d => d.id.Equals(id)).FirstOrDefault();
            return new UsersInfoModel()
            {
                id = row.id,
                Login = row.Login,
                Password = row.Password,
                Email = row.Email,
                DateOfBirth = row.DateOfBirth
            };
        }
        /// <summary>
        /// It serves the POST/PUT/PATCH
        /// </summary>
        public void SaveUser(UsersInfoModel userInfoModel)
        {
            UsersInfo dbTable = new UsersInfo();
            if (userInfoModel.id > 0)
            {
                //PUT
                dbTable = _context.UserInfo.Where(d => d.id.Equals(userInfoModel.id)).FirstOrDefault();
                if (dbTable != null)
                {
                    dbTable.Email = userInfoModel.Email;
                    dbTable.DateOfBirth = userInfoModel.DateOfBirth;
                }
            }
            else
            {
                //POST
                dbTable.Login = userInfoModel.Login;
                dbTable.Password = userInfoModel.Password;
                dbTable.Email = userInfoModel.Email;
                _context.UserInfo.Add(dbTable);
            }
            _context.SaveChanges();
        }
        
        public SignInResponse LoginUser(UserLogin userlogin)
        {
            var log = _context.UserInfo.Where(x => x.Login.Equals(userlogin.Login) &&
                      x.Password.Equals(userlogin.Password)).FirstOrDefault();

            if (log == null)
            {
                return new SignInResponse { Success = false};
            }
            else
                return new SignInResponse { Success = true};
        }
        /// <summary>
        /// DELETE
        /// </summary>
        /// <param name="id"></param>
        public void DeleteUser(int id)
        {
            var user = _context.UserInfo.Where(d => d.id.Equals(id)).FirstOrDefault();
            if (user != null)
            {
                _context.UserInfo.Remove(user);
                _context.SaveChanges();
            }
        }

        
    }
}
