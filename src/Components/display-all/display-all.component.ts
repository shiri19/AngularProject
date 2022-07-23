//קומפוננטת תצוגת מוצרים
import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Product } from 'src/Classes/product';
import {ProductsService}from 'src/Services/products.service';
@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  constructor(private prodServ:ProductsService,private router:Router) { }
  //מערך אליו יכנסו המוצרים שיגיעו מהסרוויס
  products:Array<Product>;
  //אובייקט שיכיל בכל פעם את המוצר הנוכחי עליו עומדים
currentProduct:Product
  ngOnInit() {
    //הפעלת הפונקציה של הסרביס שמקבלת את המוצרים מהשרת
    this.prodServ.getFromServer().subscribe(
      //במקרה של הצלחה
      //myData: הנתונים שחזרו מהשרת
      myData => { this.products = myData},
      //במקרה של כישלון
      //error: אובייקט במקרה של שגיאה
      error => { alert(error.message);}
    );
  }
getCuerntProduct(id:number){
  //שליחת הפרמטר אל הקומפוננטה המציגה פרטי מוצר
this.router.navigate(["/",id])
}
//פונקציית מעבר לדף פרטי מוצר
getDeatailsPage(id){
  console.log(id)
  this.router.navigate(["oneProd/",id])
}
}
