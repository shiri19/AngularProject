using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
namespace DAL
{
    public class CateforyDal
    {
        ShopContext db = new ShopContext();
        //רשימת כל הקטגוריות ממסד הנתונים
        public List<Category> getAll()
        {
            return db.Categories.ToList();
        }
        //קטגוריה בודדת
        public Category getById(short id)
        {
            return db.Categories.FirstOrDefault(x => x.CategoryCode == id);
        }
        //הוספת קטגוריה חדשה
        public List<Category> addCategory(Category newCategory)
        {
            try
            {
                //הוספה
                db.Categories.Add(newCategory);
                //שמירה בפועל במסד הנתונים
                db.SaveChanges();
                //החזרת הרשימה אחרי ההוספה
                return db.Categories.ToList();
            }
            catch (Exception err)
            {
                throw;
            }
        }
        //עדכון
        public string updateCategory(short id, Category c)
        {
            try
            {
                //איתור הפריט לעדכון
                Category categoryToEdit = db.Categories.FirstOrDefault(x => x.CategoryCode == id);
                if (categoryToEdit != null)
                {
                    //עדכון כל השדות
                    categoryToEdit.CategoryName = c.CategoryName;
                    
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
        //מחיקת קטגוריה
        public string deleteCategory(short id)
        {
            try
            {
                //איתור הפריט למחיקה
                Category categoryToDelete = db.Categories.FirstOrDefault(x => x.CategoryCode == id);
                if (categoryToDelete != null)
                {
                    //הסרת הפריט מהטבלה
                    db.Categories.Remove(categoryToDelete);
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
