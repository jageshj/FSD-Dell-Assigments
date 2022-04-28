using System;
using System.Collections.Generic;

#nullable disable

namespace Phase2_Submission.Model
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int? UserId { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime PlacedOn { get; set; }

        public virtual User User { get; set; }
    }
}
