//קומפוננטת סל הקניות
//תצוגת הפריטים בסל וכפתורי הוספה/הפחתה ומחיקה של הפריט מן הסל

import { Component, OnInit } from '@angular/core';
import { Busket } from 'src/Classes/busket';
import { OrderDetails } from 'src/Classes/order-details';
import { Orders } from 'src/Classes/orders';
import { BusketService } from 'src/Services/busket.service';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-all-busket',
  templateUrl: './all-busket.component.html',
  styleUrls: ['./all-busket.component.css']
})
export class AllBusketComponent implements OnInit {
  busket:Array<Busket>;
  constructor(private busektserv:BusketService,private userServ:UserService) { }
//קוד הלקוח הנוכחי במערכת
  custId;
  ngOnInit() {
    //הכנסה לסל המקומי את פרטי הסל מהסרוויס
    this.busket = this.busektserv.getBusket();
  }
  
  //הוספה לכמות
  add(item:Busket){
    //הפעלת הפונקציה של הסרוויס המבצעת את העדכון
    this.busektserv.addOne(item);
  }

  //הפחתה מהכמות
  reduce(item:Busket){
   //הפעלת הפונקציה של הסרוויס המבצעת את העדכון
    this.busektserv.removeOne(item)
  }
  remove(id:number,item:Busket){
    this.busektserv.delete(id,item);
  }
  
  //סיום הזמנה
  endShoping()
  {
    //יבוא קוד הלקוח מהסרוויב בו הוא נשמר
    this.custId=this.userServ.getCurrentUser();   
    let d = new Date();
    //יצירת אובייקט של קניה עם קוד הלקוח המחיר הסופי של הסל ותאריך של היום
    let order = new Orders(0,d, this.custId, this.busektserv.finalPrice);
    //יצירת רשימה מסוג מחלקת פרטי קניה
    //הרשימה מתמלאת לפי הנתונים בסל הקניות
  let listOrder:Array<OrderDetails> = new Array<OrderDetails>();
    for (let i=0;i < this.busket.length;i++)
    {
      listOrder.push(new OrderDetails(0 ,0, this.busket[i].id,this.busket[i].amount ));
    }
    this.busektserv.endShoping(order, listOrder).subscribe(data=>{}, err=>{});
    //ריקון הסל
    this.busket=[]
  }
}
