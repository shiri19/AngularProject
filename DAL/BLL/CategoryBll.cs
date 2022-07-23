using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
namespace BLL
{
   public class CustomerBll
    {
        //אובייקט של המחלקה שניגשת למסד הנתונים דרכו מופעלות הפונקציות שניגשות לשרת
        CateforyDal catDal = new CateforyDal();
       //כל הקטגוריות
        public List<Category> getAll()
        {
            return catDal.getAll();
        }
        //קטגוריה בודדת
        public Category getById(short id)
        {
            return catDal.getById(id);
        }
        //הוספת קטגוריה
        public List<Category> addCategory(Category newCategory)
        {
            return catDal.addCategory(newCategory);
        }
        //עדכון פרטי קטגוריה
        public string updateCategory(short id, Category c)
        {
            return catDal.updateCategory(id, c);
        }
        //מחיקת קטגוריה
        public string deleteCategory(short id)
        {
            return catDal.deleteCategory(id);
        }
    }
}
