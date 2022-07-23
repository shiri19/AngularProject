//קומפוננטת הרשמה למערכת עבור לקוחות חדשים
import { Component, OnInit } from '@angular/core';
import { User } from 'src/Classes/user';
import { UserService } from 'src/Services/user.service';
 
@Component({
  selector: 'app-harshama',
  templateUrl: './harshama.component.html',
  styleUrls: ['./harshama.component.css']
})
export class HarshamaComponent implements OnInit {

  constructor(private userServ:UserService) { }
  //אובייקט אליו יכנסו פקדי הקלט
newUser=new User(0,"","","","","")
userLisr:Array<User>
  ngOnInit() {
  }
  //פונקציית הוספת לקוח
add(){
//הפעלת הפונקציה של הסרביס
this.userServ.addUser(this.newUser).subscribe(
  myData => { this.userLisr = myData},
  error => { alert(error.message);}
);
}

}
