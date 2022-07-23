//קומפוננטת הכניסה למערכת
//מזהה את המשתמש עפ"י הקוד ומציגה לחצן כניסה עבור לקוחות קיימים או לחצן מעבר לטופס הרשמה עבור לקוחות חדשים
import { Component, OnInit } from '@angular/core';
import { User } from 'src/Classes/user';
import { Router } from '@angular/router';
import { UserService } from 'src/Services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
customerCode:number
currentUser:User
  constructor(private router:Router,private UserServ:UserService) { }
  manager;
  user;
  ngOnInit() {
  }
  //כניסה לאתר מעבר להמשך קניה
entry(id){
  //קבלת קוד משתמש הנוכחי מהקלט
this.customerCode=id
//שמירת המשתמש הנוכחי
this.UserServ.saveUser(this.customerCode)
//בודק אם קיים לקוח זה
this.UserServ.getById(this.customerCode).subscribe(
  data => {this.currentUser = data,console.log(this.currentUser) 
    if(this.currentUser!=null){
      if(id==1)
      //אם מנהל מעביר לקומפוננטת מנהל
      this.router.navigate(["/manager"])
      else
      //מעביר לרשימת מוצרים
      this.router.navigate(["/all"]) 
    }
    else
    //אם לא קיים מעבר להרשמה
       this.router.navigate(["/harshama"]) 
  }, 
  err => {}
);

}
}

