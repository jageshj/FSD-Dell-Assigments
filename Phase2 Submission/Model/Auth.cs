using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;
using Phase2_Submission.Model;
using System.Linq;
using System.Configuration;

namespace Phase2_Submission.Model
{
    public class Auth : IJwtAuth
    {

        private readonly string key;
        private FSDAssignmentContext _db;
        private readonly string ValidIssuer;
        private readonly string ValidAudience;

        public Auth(string key, string ValidIssuer, string ValidAudience)
        {
            this.key = key;
            this.ValidIssuer = ValidIssuer;
            this.ValidAudience = ValidAudience;
        }


        public string Authentication(string username, string password, FSDAssignmentContext db)
        {
            _db = db;
            var currentuser = _db.Users.Where(o => o.Email == username.ToString() && o.Password == password.ToString()).FirstOrDefault();

            if (currentuser != null)
            {

                //return currentuser.Email.ToString();

                var securitykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
                var SigningCredentials = new SigningCredentials(securitykey, SecurityAlgorithms.HmacSha256Signature);

                var claim = new[]
                       {
                        new Claim(ClaimTypes.Email, currentuser.Email),
                        new Claim(ClaimTypes.Role,currentuser.IsAdmin.ToString() )
                       };
                var tokenHandler = new JwtSecurityToken(issuer: ValidIssuer, audience: ValidAudience
                    , claims: claim,
                    expires: DateTime.UtcNow.AddHours(1),
                    signingCredentials: SigningCredentials);

                return new JwtSecurityTokenHandler().WriteToken(tokenHandler);

                //var tokenKey = Encoding.ASCII.GetBytes(key);

                //var tokenDescriptor = new SecurityTokenDescriptor()
                //{
                //    Subject = new ClaimsIdentity(
                //       new Claim[]
                //       {
                //        new Claim(ClaimTypes.Email, currentuser.Email),
                //        new Claim(ClaimTypes.Role,currentuser.IsAdmin.ToString() )
                //       }),
                //    Expires = DateTime.UtcNow.AddHours(1),
                //    SigningCredentials = new SigningCredentials(
                //       new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
                //};



                //4. Create Token
                //var token = tokenHandler.CreateToken(tokenDescriptor);

                // 5. Return Token from method
                //return tokenHandler.WriteToken(token);
            }
            else
            {
                return ("User not found");
            }
        }



    }
}
