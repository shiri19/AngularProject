//קומפוננטת פרטי מוצר
//מציגה את פרטי המוצר שלחצו עלין מקומפוננטת תצוגת המוצרים
//ומאפשרת להוסיף אותו לסל הקניות
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Busket } from 'src/Classes/busket';
import { Product } from 'src/Classes/product';
import { BusketService } from 'src/Services/busket.service';
import { ProductsService } from 'src/Services/products.service';

@Component({
  selector: 'app-signal-product',
  templateUrl: './signal-product.component.html',
  styleUrls: ['./signal-product.component.css']
})
export class SignalProductComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,
              private prodServ:ProductsService,
              private busketServ:BusketService,
              private router: Router) { }
  //המוצר שפרטיו יוצגו            
  myProduct:any
  x;
  
  ngOnInit() {
    this.activeRoute.params.subscribe(
      myParams => { 
        this.myProduct=myParams
        let id=myParams.productCode
         this.x=id
       }
    );
  }
  //הוספת המוצר לסל הקניות
  addToBusket(p:Product)
  {
//אובייקט של סל להוספה
    let item = new Busket(p.productCode, p.productName, p.cost,1,p.cost,"");
    //הוספה
    this.busketServ.add(item);
    //מעבר לתצוגת הסל
    this.router.navigate(["/buscket/"])
  }

  viewBusket = false;
}

