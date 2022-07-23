using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
namespace DAL
{
    public class CustomerDal
    {
        ShopContext db = new ShopContext();
        //רשימת כל הלקוחות ממסד הנתונים
        public List<Customer> getAll()
        {
            return db.Customers.ToList();
        }
        //לקוח בודד
        public Customer getById(short id)
        {
            return db.Customers.FirstOrDefault(x => x.CustId == id);
        }
        //הוספת לקוח חדש
        public List<Customer> addCustomer(Customer newCustomer)
        {
            try
            {
                //הוספה
                db.Customers.Add(newCustomer);
                //שמירה בפועל במסד הנתונים
                db.SaveChanges();
                //החזרת הרשימה אחרי ההוספה
                return db.Customers.ToList();
            }
            catch (Exception err)
            {
                throw;
            }
        }
        //עדכון
        public string updateCustomer(short id, Customer c)
        {
            try
            {
                //איתור הפריט לעדכון
                Customer customerToEdit = db.Customers.FirstOrDefault(x => x.CustId == id);
                if (customerToEdit != null)
                {
                    //עדכון כל השדות
                    customerToEdit.FirstName = c.FirstName;
                    customerToEdit.LastName = c.LastName;
                    customerToEdit.CustPassword = c.CustPassword;
                    customerToEdit.CustAddress = c.CustAddress;
                    customerToEdit.CustPhone = c.CustPhone;
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
        //מחיקת לקוח
        public string deleteCustomer(short id)
        {
            try
            {
                //איתור הפריט למחיקה
                Customer custToDelete = db.Customers.FirstOrDefault(x => x.CustId == id);
                if (custToDelete != null)
                {
                    //הסרת הפריט מהטבלה
                    db.Customers.Remove(custToDelete);
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
