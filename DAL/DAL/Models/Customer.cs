using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Orders = new HashSet<Order>();
        }

        public short CustId { get; set; }
        public string CustPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CustAddress { get; set; }
        public string CustPhone { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
