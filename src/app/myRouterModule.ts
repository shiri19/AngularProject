
import { AppComponent } from './app.component';
import {DisplayAllComponent} from 'src/Components/display-all/display-all.component'
import { HttpClientModule } from '@angular/common/http';
import { AddProdComponent } from '../Components/add-prod/add-prod.component';
import { HomeComponent } from '../Components/home/home.component';
import { HarshamaComponent } from 'src/Components/harshama/harshama.component';
import { ManagerMenueComponent } from 'src/Components/manager-menue/manager-menue.component';
import { SignalProductComponent } from 'src/Components/signal-product/signal-product.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelProdComponent } from 'src/Components/del-prod/del-prod.component';
import {AllBusketComponent} from 'src/Components/all-busket/all-busket.component'
import { ManagerActionsComponent } from 'src/Components/manager-actions/manager-actions.component';
import { AddCategoryComponent } from 'src/Components/add-category/add-category.component';
import { CategoryActionsComponent } from 'src/Components/category-actions/category-actions.component';

//טבלת ניתוב
const myRoutes:Routes = [
{path:"home",component:HomeComponent},
{path:"all",component:DisplayAllComponent},
{path:"oneProd",component:SignalProductComponent,children:[
    {path:":id",component:SignalProductComponent}
]},
{path:"manager",component:ManagerMenueComponent,children:[
    {path:"add",component:AddProdComponent},
    {path:"delete",component:DelProdComponent},
    {path:"delAndUpdate",component:ManagerActionsComponent},
    {path:"addCategory",component:AddCategoryComponent},
    {path:"categories",component:CategoryActionsComponent}
]},
{path:"harshama",component:HarshamaComponent},
 {path:"buscket",component:AllBusketComponent},
 
];
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(myRoutes), CommonModule
    ]
  })
  export class myRouterModule { }