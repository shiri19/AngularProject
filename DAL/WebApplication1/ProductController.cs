using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using DAL.Models;
namespace WebApplication1
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        productBLL prodBll = new productBLL();
        //כל המוצרים
        [HttpGet("getAll")]
        public ActionResult getAll()
        {
            return Ok(prodBll.getAll());
        }
        //מוצר בודד
        [HttpGet("getById/{id}")]
        public ActionResult getById(short id)
        {
            return Ok(prodBll.getById(id));
        }
        //רשימת מוצרים בקטגוריה
        [HttpGet("getByCategory/{code}")]
        public ActionResult getByCatefory(short code)
        {
            return Ok(prodBll.getByCategory(code));
        }
        //הוספה
        [HttpPost("addProduct")]
        public ActionResult addBook(Product newProduct)
        {
            return Ok(prodBll.addProduct(newProduct));
        }
      
        //עדכון פרטי מוצר
        [HttpPut("updateProduct/{id}")]
        public ActionResult updateProduct(short id, Product p)
        {
            return Ok(prodBll.updateProduct(id, p));
        }
        
        //מחיקת מוצר
        [HttpDelete("deleteProduct/{id}")]
        public ActionResult deleteProduct(short id)
        {
            return Ok(prodBll.deleteProduct(id));
        }
    }
}
