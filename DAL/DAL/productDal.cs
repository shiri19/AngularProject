using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
namespace DAL
{
   public class productDal
    {
        ShopContext db = new ShopContext();
        //כל המוצרים ממסד הנתונים
        public List<Product> getAll()
        {
            return db.Products.ToList();
        }
        //מוצר בודד
        public Product getById(short id)
        {
            return db.Products.FirstOrDefault(x => x.ProductCode == id);
        }
        //רשימת מוצרים לפי קטגוריה
        public List<Product> getByCategory(short code)
        {
            List<Product> newList = new List<Product>();
            List<Product> tempList = db.Products.ToList();
            for (int i = 0; i <tempList.Count ; i++)
            {
                if (tempList[i].CategoryCode == code)
                {
                    newList.Add(tempList[i]);
                }//if
            }//for
            return newList;
        }
        //הוספת מוצר חדש
        public List<Product> addProduct(Product newProduct)
        {
            try
            {
                //הוספה
                db.Products.Add(newProduct);
                //שמירה בפועל במסד הנתונים
                db.SaveChanges();
                //החזרת הרשימה אחרי ההוספה
                return db.Products.ToList();
            }
            catch (Exception err)
            {
                throw;
            }
        }
        //עדכון
        public string updateProduct(short id, Product p)
        {
            try
            {
                //איתור הפריט לעדכון
                Product prodToEdit = db.Products.FirstOrDefault(x => x.ProductCode == id);
                if (prodToEdit != null)         
                {
                    //עדכון כל השדות
                    prodToEdit.ProductName = p.ProductName;
                    prodToEdit.ProductDescription = p.ProductDescription;
                    prodToEdit.CategoryCode = p.CategoryCode;
                    prodToEdit.Cost = p.Cost;
                    prodToEdit.Picture = p.Picture;
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
        //מחיקת מוצר
        public string deleteProduct(short id)
        {
            try
            {
                //איתור הפריט למחיקה
                Product prodToDelete = db.Products.FirstOrDefault(x => x.ProductCode == id);
                if (prodToDelete != null)
                {
                    //הסרת הפריט מהטבלה
                    db.Products.Remove(prodToDelete);
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
