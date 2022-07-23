using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int OrderCode { get; set; }
        public DateTime? OrderDate { get; set; }
        public short? CustId { get; set; }
        public int? OrderSum { get; set; }

        public virtual Customer Cust { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
