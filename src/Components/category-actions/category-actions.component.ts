//קומפוננטה לשימוש המנהל
//מציגה את רשימת הקטגוריות ומאפשרת לבצע עליהן פעולות עדכון ומחיקה
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-category-actions',
  templateUrl: './category-actions.component.html',
  styleUrls: ['./category-actions.component.css']
})
export class CategoryActionsComponent implements OnInit {
//מערך קטגוריות שיגיעו מהשרת
listCategory:Array<Category>
//קטגוריה לעדכון
categoryToEdit:Category
  constructor(private catServ:CategoryService) { }
  //אובייקט של קטגוריה אליו תיכנס הקטגוריה אותה יש לערוך
  catToEdit = null
  
  ngOnInit() {
//רשימת הקטגוריות מהשרת
this.catServ.getAll().subscribe(data =>{this.listCategory = data;});
  }
   //פונקציית מחיקת קטגוריה
delete(id:number){
  this.catServ.deleteCategory(id).subscribe(
    myData => { this.listCategory = myData},
    error => { alert(error.message);}
  ); 
}
//פונקציית עדכון קטגוריה
update(c:Category){
  this.categoryToEdit=c
  }
  resetUpdate(e)
    { 
      this.categoryToEdit = null;
    }
  }


