//קומפוננטת הוספת/עדכון מוצר
//למנהל בלבד יש גישה אליה דרך קומפונטת תפריט מנהל

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/Classes/product';
import {ProductsService}from 'src/Services/products.service';
@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {
  //אובייקט שיקבל פרטי מוצר לעריכה מתוך קומפוננטת הרשימה של המנהל ויציב אותם על הטופס של קומפוננטת הוספה
  @Input("edit-item")editProduct;

  @Output("reset-update") resetUpdate:EventEmitter<string> = new EventEmitter<string>();
  constructor(private prodServ:ProductsService) { }
  listproduct:Array<Product>;

  ngOnInit() {
    //אם האובייקט לעריכה לא ריק
    if (this.editProduct!=null)
    //הצבתו באובייקט שמקושר לשדות הקלט
   this.newProduct = this.editProduct;
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
  //אובייקט אליו יכנסו פקדי הקלט
  newProduct=new Product(0,"","",0,0,"")
//הוספת המוצר
add(){
  //הפעלת הפונקציה של הסרביס
  this.prodServ.addProduct(this.newProduct).subscribe(
    myData => { this.listproduct = myData},
    error => { alert(error.message);}
  );

 
  console.log(this.newProduct);
}
//עדכון מוצר
update(){
  this.prodServ.update(this.newProduct).subscribe(data=>{
    this.editProduct=null;
    this.resetUpdate.emit("ok");
  },err=>{
    let x=err.message;
  });
}
}
