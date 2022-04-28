using System;
using System.Collections.Generic;

#nullable disable

namespace Phase2_Submission.Model
{
    public partial class Product
    {
        public Product()
        {
            CartDetails = new HashSet<CartDetail>();
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public string ImageUrl { get; set; }
        public string Uses { get; set; }
        public string ExpireDate { get; set; }

        public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
