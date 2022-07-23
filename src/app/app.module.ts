//קובץ כללי לכל היישום
//מכיל הגדרות כלליות

//יבוא מודולים
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {myRouterModule} from './myRouterModule';
//יבוא קומפוננטות
//כל הקומפוננטות בפרויקט צריכות להופיע במודול הראשי
import { AppComponent } from './app.component';
import {DisplayAllComponent} from 'src/Components/display-all/display-all.component'
import { HttpClientModule } from '@angular/common/http';
import { AddProdComponent } from '../Components/add-prod/add-prod.component';
import { HomeComponent } from '../Components/home/home.component';
import { HarshamaComponent } from 'src/Components/harshama/harshama.component';
import { ManagerMenueComponent } from 'src/Components/manager-menue/manager-menue.component';
import { SignalProductComponent } from 'src/Components/signal-product/signal-product.component';
import { ItemInBusketComponent } from '../Components/item-in-busket/item-in-busket.component';
import {AllBusketComponent} from 'src/Components/all-busket/all-busket.component';
import { DelProdComponent } from 'src/Components/del-prod/del-prod.component';
import { ManagerActionsComponent } from '../Components/manager-actions/manager-actions.component';
import { AddCategoryComponent } from '../Components/add-category/add-category.component';
import { CategoryActionsComponent } from '../Components/category-actions/category-actions.component';



@NgModule({
  //הצהרה על כל הקומפוננטות
  declarations: [
    AppComponent,DisplayAllComponent,
     AddProdComponent, HomeComponent,
      HarshamaComponent, ManagerMenueComponent, 
      SignalProductComponent, ItemInBusketComponent,
       AllBusketComponent,
       DelProdComponent,
       ManagerActionsComponent,
       AddCategoryComponent,
       CategoryActionsComponent,
       
  ],
  //הצהרה על מודולים
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,RouterModule,myRouterModule
  ],
  //הצהרה על סרביסים - לא חובה
  providers: [],
  //מגדיר מי הקומפוננטה הראשית
  bootstrap: [AppComponent]
})
export class AppModule { }
