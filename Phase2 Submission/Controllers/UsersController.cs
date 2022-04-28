using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Phase2_Submission.Model;
using System.Security.Claims;

namespace Phase2_Submission.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        // private readonly IBaseRepository<UsersController> _UserRepository;
        private readonly ILogger<UsersController> _logger;
        private readonly FSDAssignmentContext _db;
        private readonly IJwtAuth _jwtAuth;

        // private readonly BaseRepository<UserModel> UserRepository;

        public UsersController(ILogger<UsersController> logger, FSDAssignmentContext db, IJwtAuth jwtAuth)
        {
            _logger = logger;
            _db = db;
            _jwtAuth = jwtAuth;

        }


        [AllowAnonymous]
        // POST api/<MembersController>
        [HttpPost("authentication")]
        public IActionResult Authentication([FromBody] Login userCredential)
        {
            var token = _jwtAuth.Authentication(userCredential.Email, userCredential.Password, _db);
            if (token == null)
                return Unauthorized();
            return Ok(token);
        }



        [HttpGet]
        [AllowAnonymous]
        public List<User> Get()
        {
            return _db.Users.ToList();
        }

        [HttpGet("{id}")]
        [Authorize(Policy = "Isadmin")]
        public User Get(int id)
        {
            return _db.Users.Find(id);
        }

        [AllowAnonymous]
        [HttpPut]
        public string Put(User model)
        {
            _db.Users.Add(model);
            _db.SaveChanges();
            return "Success";

        }



        [HttpDelete]
        [Route("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            User Usertodelete = _db.Users.Find(id);
            if (Usertodelete == null)
            {

            }
            else
            {
                _db.Remove(Usertodelete);
                _db.SaveChanges();
            }

            return Ok($"Succesfully Deleted {id}");

        }

        private User GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;
                return new User
                {
                    Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
                    IsAdmin = bool.Parse(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value)
                };

            }
            return null;
        }

    }
}
