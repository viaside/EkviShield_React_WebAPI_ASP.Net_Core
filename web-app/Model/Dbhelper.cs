using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Npgsql.EntityFrameworkCore.PostgreSQL.Infrastructure.Internal;
using System.Data;
using System.Runtime.ConstrainedExecution;
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
                Id = row.Id,
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
            var dataList = _context.UserInfo.Where(d => d.Id.Equals(id)).FirstOrDefault();
            return new UsersInfoModel()
            {
                Id = dataList.Id,
                Login = dataList.Login,
                Password = dataList.Password,
                Email = dataList.Email,
                DateOfBirth = dataList.DateOfBirth
            };
        }

        /// <summary>
        /// It serves the POST/PUT/PATCH
        /// </summary>
        public void SaveUser(UsersInfoModel userInfoModel)
        {
            UsersInfo dbTable = new UsersInfo();
            if (userInfoModel.Id > 0)
            {
                //PUT
                dbTable = _context.UserInfo.Where(d => d.Id.Equals(userInfoModel.Id)).FirstOrDefault();
                if (dbTable != null)
                {
                    dbTable.Login = userInfoModel.Login;
                    dbTable.Password = userInfoModel.Password;
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
                dbTable.DateOfBirth = userInfoModel.DateOfBirth;
                _context.UserInfo.Add(dbTable);
            }
            _context.SaveChanges();
        }

        public void ChangeLogin(UsersInfoModel usersInfoModel)
        {
            UsersInfo dbTable = new UsersInfo();
            dbTable = _context.UserInfo.Where(d => d.Id.Equals(usersInfoModel.Id)).FirstOrDefault();
            if (dbTable != null)
            {
                dbTable.Login = usersInfoModel.Login;
            }
            _context.SaveChanges();
        }

        public void ChangePassword(UsersInfoModel usersInfoModel)
        {
            UsersInfo dbTable = new UsersInfo();
            dbTable = _context.UserInfo.Where(d => d.Id.Equals(usersInfoModel.Id)).FirstOrDefault();
            if (dbTable != null)
            {
                dbTable.Password = usersInfoModel.Password;
            }
            _context.SaveChanges();
        }
        
        public void DeleteUser(int id)
        {
            _context.UserInfo.Remove(_context.UserInfo.Single(a => a.Id == id));
            _context.SaveChanges();
        }

        public SignInResponse LoginUser(UserLogin userlogin)
        {
            var log = _context.UserInfo.Where(x => x.Login.Equals(userlogin.Login) &&
                      x.Password.Equals(userlogin.Password)).FirstOrDefault();

            if (log == null)
            {
                return new SignInResponse{ Success = false};
            }
            else
                return new SignInResponse{ Success = true, Id = log.Id, Login = log.Login};
        }
    }
}
