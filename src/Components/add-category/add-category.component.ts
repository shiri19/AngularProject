//קומפוננטת הוספת/עדכון קטגוריה
//למנהל בלבד יש גישה אליה דרך קומפונטת תפריט מנהל

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
//אובייקט שיקבל פרטי קטגוריה לעריכה מתוך קומפוננטת הרשימה של המנהל ויציב אותם על הטופס של קומפוננטת הוספה
@Input("edit-item")editProduct;

@Output("reset-update") resetUpdate:EventEmitter<string> = new EventEmitter<string>();
 //אובייקט אליו יכנסו פקדי הקלט
newCategory=new Category(0,"");
constructor(private catServ:CategoryService) { }
  //רשימת הקטגוריות
  listCategory:Array<Category>;
  ngOnInit() {
    //אם האובייקט לעריכה לא ריק
    if (this.editProduct!=null)
    //הצבתו באובייקט שמקושר לשדות הקלט
   this.newCategory = this.editProduct;
  }
//פונקציית הסיום מבצעת עדכון או הוספה
onSubmit(){
  //אם לא נשלח אובייקט לעדכון
 if (this.editProduct == null)
 //תתבצע הוספה
 this.add()
 else
 //יתבצע עדכון
 this.update()
}
//פונקצית הוספה
add(){
  //הפעלת הפונקציה של הסרביס
  this.catServ.addCategory(this.newCategory).subscribe(
    myData => { this.listCategory = myData},
    error => { alert(error.message);}
  );
  console.log(this.newCategory)
}
//פונקציית עדכון
update(){
  this.catServ.update(this.newCategory).subscribe(data=>{
    this.editProduct=null;
    this.resetUpdate.emit("ok");
  },err=>{
    let x=err.message;
  });
}

}
