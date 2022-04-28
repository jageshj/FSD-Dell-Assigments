using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Threading.Tasks;
using Phase2_Submission.Model;
using System.Data.Entity;

namespace MumbaiPharma2.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        // private readonly IBaseRepository<UsersController> _UserRepository;
        private readonly ILogger<ProductsController> _logger;
        private readonly FSDAssignmentContext _db;
        private readonly IJwtAuth _jwtAuth;

        // private readonly BaseRepository<UserModel> UserRepository;

        public ProductsController(ILogger<ProductsController> logger, FSDAssignmentContext db, IJwtAuth jwtAuth)
        {
            _logger = logger;
            _db = db;
            _jwtAuth = jwtAuth;

        }




        [HttpGet()]

        //   [Authorize(Policy = "Isadmin")]
        [AllowAnonymous]
        public List<Product> Get()
        {
            return _db.Products.ToList();
        }

        [HttpGet("{id}")]
        //[Authorize(Policy = "Isadmin")]
        [AllowAnonymous]
        public Product Get(int id)
        {
            return _db.Products.Find(id);
        }

        [AllowAnonymous]
        [HttpPut]
        //[Authorize(Policy = "Isadmin")]
        public string Put(Product model)
        {
            _db.Products.Add(model);
            _db.SaveChanges();

            return "Success";

        }

        [AllowAnonymous]
        [HttpPost()]
        public IActionResult Update([FromBody] Product item)
        {
            if (item.ProductId == 0)
            {
                return BadRequest();
            }
            var Product = _db.Products.FirstOrDefault(t => t.ProductId == item.ProductId);
            if (Product == null)
            {
                return NotFound();
            }

            Product.Name = item.Name;
            Product.CompanyName = item.CompanyName;
            Product.Price = item.Price;
            Product.Quantity = item.Quantity;
            Product.ImageUrl = item.ImageUrl;
            Product.Uses = item.Uses;
            Product.ExpireDate = item.ExpireDate;

            _db.Products.Update(Product);
            _db.SaveChanges();

            return Ok(item.ProductId);
        }



        [HttpDelete]
        [Route("{id}")]
        [Authorize(Policy = "Isadmin")]
        public IActionResult Delete(int id)
        {
            Product products = _db.Products.Find(id);
            if (products == null)
            {
                return Ok("Product not found");
            }
            else
            {
                _db.Remove(products);
                _db.SaveChanges();
            }

            return Ok($"Succesfully Deleted {id}");

        }

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
