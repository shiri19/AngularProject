using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
namespace DAL
{
   public class OrderDeatailsDal
    {
        ShopContext db = new ShopContext();
        //כל פרטי ההזמנות ממסד הנתונים
        public List<OrderDetail> getAll()
        {
            return db.OrderDetails.ToList();
        }
        //פרטי הזמנה בודדת 
        public OrderDetail getById(short id)
        {
            return db.OrderDetails.FirstOrDefault(x => x.OrderDetailsCode == id);
        }
        //הוספת פרטי הזמנה
        public List<OrderDetail> addOrderDetail(OrderDetail newOrderDetail)
        {
            try
            {
                //הוספה
                db.OrderDetails.Add(newOrderDetail);
                //שמירה בפועל במסד הנתונים
                db.SaveChanges();
                //החזרת הרשימה אחרי ההוספה
                return db.OrderDetails.ToList();
            }
            catch (Exception err)
            {
                throw;
            }
        }
        //עדכון
        public string updateOrderDetail(short id, OrderDetail od)
        {
            try
            {
                //איתור הפריט לעדכון
                OrderDetail OrderDetailToEdit = db.OrderDetails.FirstOrDefault(x => x.OrderDetailsCode == id);
                if (OrderDetailToEdit != null)
                {
                    //עדכון כל השדות
                    OrderDetailToEdit.OrderCode = od.OrderCode;
                    OrderDetailToEdit.ProductCode = od.ProductCode;
                    OrderDetailToEdit.Quantity = od.Quantity;         
                    //שמירה בפועל במסד הנתונים
                    db.SaveChanges();
                    return "success";
                }
                return "faild";
            }
            catch (Exception err)
            {
                return "faild";
            }
        }
        //מחיקת פרטי הזמנה 
        public string deleteOrderDetail(short id)
        {
            try
            {
                //איתור הפריט למחיקה
                OrderDetail OrderDetailToDelete = db.OrderDetails.FirstOrDefault(x => x.OrderDetailsCode == id);
                if (OrderDetailToDelete != null)
                {
                    //הסרת הפריט מהטבלה
                    db.OrderDetails.Remove(OrderDetailToDelete);
                    //שמירה בפועל במסד הנתונים
                    db.SaveChanges();
                    return "success";
                }
                return "faild";
            }
            catch (Exception err)
            {
                return "faild";
            }
        }

    }
}
