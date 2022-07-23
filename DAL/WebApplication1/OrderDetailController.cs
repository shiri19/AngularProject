using Microsoft.AspNetCore.Http;
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
    public class OrderDetailController : ControllerBase
    {
        OrderDetailBll odBll = new OrderDetailBll();
        //כל ההזמנות
        [HttpGet("getAll")]
        public ActionResult getAll()
        {
            return Ok(odBll.getAll());
        }
        //הזמנה בודדת
        [HttpGet("getById/{id}")]
        public ActionResult getById(short id)
        {
            return Ok(odBll.getById(id));
        }
        //הוספה
        [HttpPost("addOrderDetail")]
        public ActionResult addOrderDetail(OrderDetail newOrderDetail)
        {
            return Ok(odBll.addOrderDetail(newOrderDetail));
        }

        //עדכון פרטי הזמנה
        [HttpPut("updateOrderDetail/{id}")]
        public ActionResult updateOrderDetail(short id, OrderDetail o)
        {
            return Ok(odBll.updateOrderDetail(id, o));
        }

        //מחיקת הזמנה
        [HttpDelete("deleteOrderDetail/{id}")]
        public ActionResult deleteOrderDetail(short id)
        {
            return Ok(odBll.deleteOrderDetail(id));
        }
    }
}
