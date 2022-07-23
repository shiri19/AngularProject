using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
namespace BLL
{
  public class OrderDetailBll
    {
        OrderDeatailsDal odDal = new OrderDeatailsDal();
        //כל ההזמנות
        public List<OrderDetail> getAll()
        {
            return odDal.getAll();
        }
        //הזמנה בודדת
        public OrderDetail getById(short id)
        {
            return odDal.getById(id);
        }
        //הוספת הזמנה
        public List<OrderDetail> addOrderDetail(OrderDetail newOrderDetail)
        {
            return odDal.addOrderDetail(newOrderDetail);
        }
        //עדכון פרטי הזמנה
        public string updateOrderDetail(short id, OrderDetail o)
        {
            return odDal.updateOrderDetail(id, o);
        }
        //מחיקת הזמנה
        public string deleteOrderDetail(short id)
        {
            return odDal.deleteOrderDetail(id);
        }

    }
}
