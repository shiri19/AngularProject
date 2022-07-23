using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
namespace BLL
{
  public class OrderBll
    {
        OrdereDAl orDal = new OrdereDAl();
        //כל ההזמנות
        public List<Order> getAll()
        {
            return orDal.getAll();
        }
        //הזמנה בודדת
        public Order getById(short id)
        {
            return orDal.getById(id);
        }
        //הוספת הזמנה
        public string addOrder(Buying newOrder)
        {
            return orDal.addOrder(newOrder);
        }
        //עדכון פרטי הזמנה
        public string updateOrder(short id, Order o)
        {
            return orDal.updateOrder(id, o);
        }
        //מחיקת הזמנה
        public string deleteOrder(short id)
        {
            return orDal.deleteOrder(id);
        }

    }
}
