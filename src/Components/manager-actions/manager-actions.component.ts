//קומפוננטה לשימוש מנהל האתר
//מציגה את רשימת המוצרים ועל כל אחד מהם אפשרות מחיקה/עדכון
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Classes/product';
import { ProductsService } from 'src/Services/products.service';

@Component({
  selector: 'app-manager-actions',
  templateUrl: './manager-actions.component.html',
  styleUrls: ['./manager-actions.component.css']
})
export class ManagerActionsComponent implements OnInit {
//מערך מוצרים שיגיעו מהשרת
  productsList:Array<Product>
  //מוצר לעדכון
  prodToEdit:Product
  constructor(private prodServ:ProductsService) { }
//אובייקט של מוצר אליו יכנס המוצר אותו יש לערוך
  productToEdit=null
  ngOnInit() {
    //רשימת המוצרים מהשרת
  this.prodServ.getFromServer().subscribe(data =>{this.productsList = data;});
  }
  //פונקציית מחיקת מוצר
delete(id:number){
  this.prodServ.deleteProduct(id).subscribe(
    myData => { this.productsList = myData},
    error => { alert(error.message);}
  ); 
}
//פונקציית עדכון מוצר
update(p:Product){
this.prodToEdit=p
}
resetUpdate(e)
  { 
    this.prodToEdit = null;
  }
}
