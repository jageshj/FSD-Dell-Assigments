using System;
using System.Collections.Generic;

#nullable disable

namespace Phase2_Submission.Model
{
    public partial class Cart
    {
        public Cart()
        {
            CartDetails = new HashSet<CartDetail>();
        }

        public int CartId { get; set; }
        public int? OwnerUserId { get; set; }

        public virtual User OwnerUser { get; set; }
        public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
