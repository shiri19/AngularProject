using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
namespace DAL
{
   public class OrdereDAl
    {
        ShopContext db = new ShopContext();
        //רשימת כל ההזמנות ממסד הנתונים
        public List<Order> getAll()
        {
            return db.Orders.ToList();
        }
        //הזמנה בודדת
        public Order getById(short id)
        {
            return db.Orders.FirstOrDefault(x => x.OrderCode == id);
        }
        //הוספת הזמנה חדשה
        public string addOrder(Buying newOrder)
        {
            try
            {
                //הוספה
                db.Orders.Add(newOrder.order);
                //שמירה בפועל במסד הנתונים
                db.SaveChanges();
                //קבלת קוד הקניה האחרונה שנעשתה
                int id = db.Orders.Max(x => x.OrderCode);
                //הוספה לטבלת פרטי קניה
                foreach(var item in newOrder.orderDetails)
                {
                    item.OrderCode = id;
                    db.OrderDetails.Add(item);
                    db.SaveChanges();
                }
                //החזרת הרשימה אחרי ההוספה
                // return db.Orders.ToList();
                return "succes";
            }
            catch (Exception err)
            {
                throw;
            }
        }
        //עדכון
        public string updateOrder(short id, Order o)
        {
            try
            {
                //איתור הפריט לעדכון
                Order orderToEdit = db.Orders.FirstOrDefault(x => x.OrderCode == id);
                if (orderToEdit != null)
                {
                    //עדכון כל השדות
                    orderToEdit.OrderDate = o.OrderDate;
                    orderToEdit.CustId = o.CustId;
                    orderToEdit.OrderSum = o.OrderSum;
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
        //מחיקת הזמנה
        public string deleteOrder(short id)
        {
            try
            {
                //איתור הפריט למחיקה
                Order orderToDelete = db.Orders.FirstOrDefault(x => x.OrderCode == id);
                if (orderToDelete != null)
                {
                    //הסרת הפריט מהטבלה
                    db.Orders.Remove(orderToDelete);
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
