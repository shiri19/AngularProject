//סרוויס לטיפול בכל מה שקשור במוצרים
//קריאות שרת מכונות לקונטרולר מוצרים
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import{Product}from "../Classes/product";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myHttp:HttpClient) { }
  URL=`https://localhost:44366/api/Product/`;
//קבלת כל המוצרים מהשרת
  getFromServer():Observable<Array<Product>>
  {
    //get: קבלת נתונים מהשרת
    //this.URL: המשתנה שהגדרנו שמכיל את כל ההתחלה של כתובת השרת
    return this.myHttp.get<Array<Product>>(this.URL + "getAll");
  }
  //קבלת מוצר בודד מהשרת
  getById(id:number):Observable<Product>{
    //הפעלת הפונקציה של השרת ושליחת  פרמטר המבטא את הקוד של המוצר הספציפי אותו נרצה לקבל
    return this.myHttp.get<Product>(this.URL+"getById/"+id)
  }
  //רשימת מוצרים לקטגוריה
  getByCategory(c:number):Observable<Array<Product>>{
    return this.myHttp.get<Array<Product>>(this.URL+"getByCategory/"+c)
  }
  //הוספת מוצר חדש
  addProduct(p:Product):Observable<Array<Product>>{
    return this.myHttp.post<Array<Product>>(this.URL+"addProduct/",p)
  }
  //מחיקת מוצר
  deleteProduct(id:number):Observable<Array<Product>>{
    //הפעלת פונקצית המחיקה בשרת ושליחת פרמטר המבטא את קוד המוצר המיועד למחיקה
    return this.myHttp.delete<Array<Product>>(this.URL+"deleteProduct/"+id)
  }
 //עדכון מוצר
 update(p:Product):Observable<string>
 {
   return this.myHttp.put<string>(this.URL+"updateProduct/"+p.productCode,p)
 } 
}
