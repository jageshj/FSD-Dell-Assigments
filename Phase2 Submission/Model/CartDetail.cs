using System;
using System.Collections.Generic;

#nullable disable

namespace Phase2_Submission.Model
{
    public partial class CartDetail
    {
        public int CartDetailId { get; set; }
        public int? CartId { get; set; }
        public int? ProductId { get; set; }

        public virtual Cart Cart { get; set; }
        public virtual Product Product { get; set; }
    }
}
