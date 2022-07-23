using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using DAL;
using DAL.Models;
namespace WebApplication1
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        OrderBll orBll = new OrderBll();
        //כל ההזמנות
        [HttpGet("getAll")]
        public ActionResult getAll()
        {
            return Ok(orBll.getAll());
        }
        //הזמנה בודדת
        [HttpGet("getById/{id}")]
        public ActionResult getById(short id)
        {
            return Ok(orBll.getById(id));
        }
        //הוספה
        [HttpPost("addOrder")]
        public ActionResult addOrder([FromBody]DAL.Buying buying)
        {
            //Order newOrder = buying.order;
            return Ok(orBll.addOrder(buying));
        }

        //עדכון פרטי הזמנה
        [HttpPut("updateOrder/{id}")]
        public ActionResult updateOrder(short id, Order o)
        {
            return Ok(orBll.updateOrder(id,o));
        }

        //מחיקת הזמנה
        [HttpDelete("deleteOrder/{id}")]
        public ActionResult deleteOrder(short id)
        {
            return Ok(orBll.deleteOrder(id));
        }

    }
}
