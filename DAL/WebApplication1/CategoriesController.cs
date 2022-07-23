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
    public class CategoriesController : Controller
    {
        CustomerBll catBll = new CustomerBll();
        //כל הקטגוריות
        [HttpGet("getAll")]
        public ActionResult getAll()
        {
            return Ok(catBll.getAll());
        }
        //קטגוריה בודדת
        [HttpGet("getById/{id}")]
        public ActionResult getById(short id)
        {
            return Ok(catBll.getById(id));
        }
        //הוספה
        [HttpPost("addCategory")]
        public ActionResult addCategory(Category newCategory)
        {
            return Ok(catBll.addCategory(newCategory));
        }

        //עדכון פרטי קטגוריה
        [HttpPut("updateCategory/{id}")]
        public ActionResult updateCategory(short id, Category c)
        {
            return Ok(catBll.updateCategory(id, c));
        }

        //מחיקת קטגוריה
        [HttpDelete("deleteCategory/{id}")]
        public ActionResult deleteCategory(short id)
        {
            return Ok(catBll.deleteCategory(id));
        }
    }
}
