//סרוויס לטיפול בסל הקניות
//מכיל את כל הפעולות שמתבצעות על הסל
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Busket } from 'src/Classes/busket';
import { Orders } from 'src/Classes/orders';
import {OrderDetails} from 'src/Classes/order-details'
import { Buying } from 'src/Classes/buying';
// import { utimes } from 'fs';
@Injectable({
  providedIn: 'root'
})
export class BusketService {
  myId;
  //סל הקניות מכיל רשימה של פריטים אותם הלקוח מעונין לקנות
  myBusket:Array<Busket> = new Array<Busket>();
  //מחיר סופי של כל הקניה
  finalPrice:number=0;
  constructor(private http:HttpClient) { }
  //קבלת כל סל הקניות
  getBusket(){
    return this.myBusket;
  }
  //הוספת מוצר לסל הקניות
  add(item:Busket){
     //חיפוש הפריט להוספה
    //אם הפריט לא נמצא, מוסיפים לסל הקניות
    let currItem = this.myBusket.find(x => x.id == item.id);
    if (currItem == null)
    {
      //הוספת הפריט לסל
      this.myBusket.push(item);
      //הוספת המחיר לסכום הסופי
      console.log(typeof(item.priceUnit));
      
      this.finalPrice+=Number(item.priceUnit) 
    }
    //אם הפריט נמצא - נוסיף לשדה כמות ונשלח לפונ' עדכון
    else
    {
      currItem.amount++;
      this.update(currItem);
    }
  }
  //עדכון
 update(item:Busket){
   //איתור השדה לעדכון
   let currItem = this.myBusket.find(x => x.id == item.id);
   if (currItem != null)
   {
     //עדכון הכמות והמחיר בהתאם
     currItem.amount = item.amount;
     currItem.totalSum = (item.amount * item.priceUnit);
     console.log(typeof(item.priceUnit));
     this.finalPrice+=Number(item.priceUnit);
   }
 }
 //שינוי כמות - מינוס
 removeOne(item:Busket){
//חיפוש השדה אותו יש לעדכן
let itemToEdit=this.myBusket.find(x => x.id == item.id);
//אם הפריט המבוקש קיים בסל וגם יש כמה יחידות ממנו
if(itemToEdit!=null && item.amount!=1){
//עדכון הכמות
itemToEdit.amount=item.amount-1
//עדכון המחיר החדש לפריט זה
itemToEdit.totalSum=(item.amount*item.priceUnit)
//עדכון המחיר הסופי של הסל כולו
this.finalPrice=this.finalPrice-Number(item.priceUnit)
}//if
//אם קיימת יחידה אחת ממוצר זה יש להסיר אותו
else if(item.amount==1){
this.myId=item.id
this.delete(this.myId,item)
 } //else if
}
//שינוי כמות - פלוס
addOne(item:Busket){
 //חיפוש השדה אותו יש לעדכן
 let itemToEdit=this.myBusket.find(x => x.id == item.id);
 //אם הפריט קיים בסל
 if(itemToEdit!=null){
//עדכון הכמות
itemToEdit.amount=Number(item.amount+1)
//עדכון המחיר החדש לפריט זה
itemToEdit.totalSum=(item.amount*Number(item.priceUnit))
//עדכון המחיר הסופי של הסל כולו
this.finalPrice=this.finalPrice+Number(item.priceUnit)
 }//if
}
 //מחיקה
 delete(id:number,item:Busket)
 {
   //עדכון מחיר סופי
   //חיפוש הפריט
  let currItem = this.myBusket.find(x => x.id == item.id);
  //שינוי המחיר
  this.finalPrice=this.finalPrice-item.totalSum;
  //חיפוש אינדקס הפריט למחיקה
   let ind = this.myBusket.findIndex(x => x.id == id);
   //מחיקה
   this.myBusket.splice(ind, 1);
 }

 URL="https://localhost:44380/api/Order/";
//בסיום הקניה שליחת פרטי הסל אל השרת
 endShoping(order:Orders, OrderDetails:Array<OrderDetails>):Observable<any>
 {
   //יצירת אובייקט שישלח לשרת שמכיל אובייקט של קניה שיכנס לטבלת קניות ואובייקט של פרטי קניה שיכנס לטבלת פרטי קניה
   let o:Buying
   o = new Buying(order,OrderDetails)
   //שליחה לפונקציית הוספת הזמנה
   return this.http.post<any>(this.URL+"addOrder", o);
 }
 
}
