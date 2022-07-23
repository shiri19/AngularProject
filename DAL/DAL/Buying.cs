using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class Buying
    {
        public Order order { get; set; }
        public List<OrderDetail> orderDetails { get; set; }
    }
}
