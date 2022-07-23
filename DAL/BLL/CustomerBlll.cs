using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
namespace BLL
{
    public class CustomerBlll
    {
        //אובייקט של המחלקה שניגשת למסד הנתונים דרכו מופעלות הפונקציות שניגשות לשרת
        CustomerDal custDal = new CustomerDal();
        //כל הלקוחות
        public List<Customer> getAll()
        {
            return custDal.getAll();
        }
        //לקוח בודד
        public Customer getById(short id)
        {
            return custDal.getById(id);
        }
        //הוספת משתמש חדש
        public List<Customer> addCustomer(Customer newCustomer)
        {
            return custDal.addCustomer(newCustomer);
        }
        //עדכון פרטי לקוח
        public string updateCustomer(short id, Customer c)
        {
            return custDal.updateCustomer(id, c);
        }
        //מחיקת לקוח
        public string deleteCustomer(short id)
        {
            return custDal.deleteCustomer(id);
        }
    }
}
