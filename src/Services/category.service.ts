//סרוויס לטיפול בכל מה שקשור לקטגוריות
//קריאות שרת מכוונות לקונטרולר של הקטגוריות
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Category } from 'src/Classes/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private myHttp:HttpClient) { }
  //כתובת השרת
  URL=`https://localhost:44366/api/Categories/`;
  //קבלת רשימת הקטגוריות
 getAll():Observable<Array<Category>>{
return this.myHttp.get<Array<Category>>(this.URL+"getAll")
 }
 //קבלת קטגוריה בודדת
 getById(id:number):Observable<Category>{
   return this.myHttp.get<Category>(this.URL+"getById/"+id)
 }
 //הוספת קטגוריה חדשה
 addCategory(c:Category):Observable<Array<Category>>{
  return this.myHttp.post<Array<Category>>(this.URL+"addCategory/",c)
}
//עדכון פרטי קטגוריה
update(c:Category):Observable<string>
 {
   return this.myHttp.put<string>(this.URL+"updateCategory/"+c.categoryCode,c)
 } 
 //מחיקת קטגוריה
 deleteCategory(id:number):Observable<Array<Category>>{
  //הפעלת פונקצית המחיקה בשרת ושליחת פרמטר המבטא את קוד הקטגוריה המיועדת למחיקה
  return this.myHttp.delete<Array<Category>>(this.URL+"deleteCategory/"+id)
}
}
