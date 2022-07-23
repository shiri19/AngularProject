using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class OrderDetail
    {
        public int OrderDetailsCode { get; set; }
        public int? OrderCode { get; set; }
        public short? ProductCode { get; set; }
        public int? Quantity { get; set; }

        public virtual Order OrderCodeNavigation { get; set; }
        public virtual Product ProductCodeNavigation { get; set; }
    }
}
