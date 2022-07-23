using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
namespace BLL
{
  public  class productBLL
    {
        //אובייקט של המחלקה שניגשת למסד הנתונים ומכיל בתוכו את כל הנתונים
        productDal prodDal = new productDal();
        //כל המוצרים
        public List<Product> getAll()
        {
            return prodDal.getAll();
        }
        //מוצר בודד
        public Product getById(short id)
        {
            return prodDal.getById(id);
        }
        //רשימת המוצרים של קטגוריה מסוימת
        public List<Product> getByCategory(short c)
        {
            return prodDal.getByCategory(c);
        }
        //הוספת מוצר
        public List<Product> addProduct(Product newProduct)
        {
            return prodDal.addProduct(newProduct);
        }
        //עדכון פרטי המוצר
        public string updateProduct(short id, Product p)
        {
            return prodDal.updateProduct(id, p);
        }
        //מחיקת מוצר
        public string deleteProduct(short id)
        {
            return prodDal.deleteProduct(id);
        }


    }
}
