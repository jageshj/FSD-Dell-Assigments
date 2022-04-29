using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Threading.Tasks;
using Phase2_Submission.Model;
//using System.Data.Entity;

namespace Phase2_Submission.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {

        // private readonly IBaseRepository<UsersController> _UserRepository;
        private readonly ILogger<CartController> _logger;
        private readonly FSDAssignmentContext _db;
        private readonly IJwtAuth _jwtAuth;

        // private readonly BaseRepository<UserModel> UserRepository;

        public CartController(ILogger<CartController> logger, FSDAssignmentContext db, IJwtAuth jwtAuth)
        {
            _logger = logger;
            _db = db;
            _jwtAuth = jwtAuth;

        }




        //   [HttpGet()]

        ////   [Authorize(Policy = "Isadmin")]
        //[AllowAnonymous]
        //   public List<Cart> Get()
        //    {
        //       var cart = _db.Carts
        //           .Include(p => p.CartDetails)
        //           .ToList();

        //   }

        [HttpGet()]
        //   [Authorize(Policy = "Isadmin")]
        [AllowAnonymous]
        public IEnumerable<Cart> GetProd()
        {
            var carts = _db.Carts
            .Include(p => p.CartDetails)
            .ToList();

            return _db.Carts;
            //return _db.Carts
              //  .Include(p => p.CartDetails)
                //.ToList(); 
        }



        [HttpGet("ByCartID/{CartId}")]
       
        [AllowAnonymous]
        //  [Authorize(Policy = "Isadmin")]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCart([FromRoute] int CartId)
        {
            

            var result = await _db.Carts.FindAsync(CartId);
            if (result == null)
            {
                return NotFound();
            }

            return await _db.Carts.Where(m => m.CartId == CartId)
                .Include(o=> o.CartDetails)
                .ToListAsync();


        }


        [HttpGet("ByUserID/{Userid}")]
        [AllowAnonymous]
        //  [Authorize(Policy = "Isadmin")]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCartbyUser([FromRoute] int Userid)
        {


            return await _db.Carts.Where(m => m.OwnerUserId == Userid).ToListAsync();


        }



        [AllowAnonymous]
        [HttpPut]
        //[Authorize(Policy = "Isadmin")]
        public string Put(Cart model)
        {
            _db.Carts.Add(model);
            _db.SaveChanges();

            return "Success";

        }

        [AllowAnonymous]
        [HttpPost()]
        public IActionResult Update([FromBody] Cart item)
        {
            if (item.CartId == 0)
            {
                return BadRequest();
            }
            var cart = _db.Carts.FirstOrDefault(t => t.CartId == item.CartId);
            if (cart == null)
            {
                return NotFound();
            }

            cart.CartId = item.CartId;
            cart.OwnerUserId = item.OwnerUserId;


            _db.Carts.Update(cart);
            _db.SaveChanges();

            return Ok(item.CartId);
        }



        [HttpDelete]
        [Route("{id}")]
        //[Authorize(Policy = "Isadmin")]
        [AllowAnonymous]
        public IActionResult Delete(int id)
        {
            Cart Carttodelete = _db.Carts.Find(id);
            if (Carttodelete == null)
            {
                return Ok("Product not found");
            }
            else
            {
                _db.Remove(Carttodelete);
                _db.SaveChanges();
            }

            return Ok($"Succesfully Deleted {id}");

        }

        //[AllowAnonymous]
        //[HttpPut("ByorderId/{model}")]
        ////[Authorize(Policy = "Isadmin")]
        //public string Put(Order model)
        //{
        //    _db.Orders.Add(model);
        //    _db.SaveChanges();

        //    return "Success";

        //}


        //private User GetCurrentUser()
        //{
        //    var identity = HttpContext.User.Identity as ClaimsIdentity;

        //    if(identity != null)
        //    {
        //        var userClaims = identity.Claims;
        //        return new User
        //        {
        //            Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
        //            IsAdmin = bool.Parse(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value)
        //        };

        //    }
        //    return null;
        //}

    }
}
