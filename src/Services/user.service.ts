//:סרוויס לכל מה שקשור במשתמשים 
//קריאות שרת מכוונות לקונטרולר של הלקוחות
//ושמירה של פרטי הלקוח 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/Classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
customers:Array<User>
currentCusId:any
  constructor(private myHttp:HttpClient) { }
  //כתובת השרת 
  URL=`https://localhost:44366/api/Customer/`;
  //קבלת רשימת כל הלקוחות
  getAllCustomers(){
    return this.myHttp.get<Array<User>>(this.URL + "getAll");
  }
  //קבלת לקוח בודד
  getById(id){
    return this.myHttp.get<User>(this.URL+"getById/"+id)
  }
  //הוספת לקוח חדש
  addUser(newUser:User):Observable<Array<User>>{
    return this.myHttp.post<Array<User>>(this.URL+"addCustomer/",newUser)
}
//עדכון פרטי משתמש
update(customer:User,id:number):Observable<Array<User>>
{
  return this.myHttp.put<Array<User>>(this.URL+"updateCustomer/"+id,customer);
}
//מחיקת משתמש
deleteUser(id:number):Observable<Array<User>>{
  //הפעלת פונקצית המחיקה בשרת ושליחת פרמטר המבטא את קוד המוצר המיועד למחיקה
  return this.myHttp.delete<Array<User>>(this.URL+"deleteCustomer/"+id)
}
//שמירת קוד המשתמש הנוכחי שנכנס למערכת
saveUser(id){
this.currentCusId=id
}
//קבלת קוד הלקוח הנוכחי שנשמר במערכת
getCurrentUser(){
  return this.currentCusId
}
}