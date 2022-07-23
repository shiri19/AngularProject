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
    public class CustomerController : Controller
    {
      
        CustomerBlll cb = new CustomerBlll();
       
        
        //כל הלקוחות
        [HttpGet("getAll")]
        public ActionResult getAll()
        {
            return Ok(cb.getAll());

        }
        //לקוח בודד
        [HttpGet("getById/{id}")]
        public ActionResult getById(short id)
        {
            return Ok(cb.getById(id));
        }
        //הוספה
        [HttpPost("addCustomer")]
        public ActionResult addCustomer(Customer newCustomer)
        {
            return Ok(cb.addCustomer(newCustomer));
        }

        //עדכון פרטי לקוח
        [HttpPut("updateCustomer/{id}")]
        public ActionResult updateCustomer(short id, Customer c)
        {
            return Ok(cb.updateCustomer(id, c));
        }
        
        //מחיקת לקוח
        [HttpDelete("deleteCustomer/{id}")]
        public ActionResult deleteCustomer(short id)
        {
            return Ok(cb.deleteCustomer(id));
        }
    }
}
