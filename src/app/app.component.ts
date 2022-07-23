
//יבוא ספריות
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/Classes/category';
import { CategoryService } from 'src/Services/category.service';
import { ProductsService } from 'src/Services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories:Array<Category>
  constructor(private catServ:CategoryService,private router:Router) { }
  ngOnInit() {
    //הפעלת הפונקציה של הסרביס שמקבלת את הקטגוריות מהשרת
    this.catServ.getAll().subscribe(
      //במקרה של הצלחה
      //myData: הנתונים שחזרו מהשרת
      myData => { this.categories = myData},
      //במקרה של כישלון
      //error: אובייקט במקרה של שגיאה
      error => { alert(error.message);}
    );
  }
  //פונקציה לפתיחת עמוד הצגת מורצרים ממוינים
  openList(c:number){
    this.router.navigate(["/sort"]) 
  }
}
