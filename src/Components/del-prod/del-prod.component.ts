import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Classes/product';
import { ProductsService } from 'src/Services/products.service';

@Component({
  selector: 'app-del-prod',
  templateUrl: './del-prod.component.html',
  styleUrls: ['./del-prod.component.css']
})
export class DelProdComponent implements OnInit {
products:Array<Product>;
  constructor(private prodServ:ProductsService) { }

  ngOnInit() {
     
  }
  //מחיקה
  onDelete(id:number)
  {
    this.prodServ.deleteProduct(id).subscribe(
      myData => { this.products = myData},
      error => { alert(error.message);}
    );
  }
}
