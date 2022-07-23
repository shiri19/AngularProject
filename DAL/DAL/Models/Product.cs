using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Product
    {
        public Product()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public short ProductCode { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public short? CategoryCode { get; set; }
        public decimal? Cost { get; set; }
        public string Picture { get; set; }

        public virtual Category CategoryCodeNavigation { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
