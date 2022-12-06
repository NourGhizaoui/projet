import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminGuard } from './admin.guard';
import { LevresComponent } from './categories/levres/levres.component';
import { TeintComponent } from './categories/teint/teint.component';
import { YeuxComponent } from './categories/yeux/yeux.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MarqueComponent } from './marque/marque.component';
import { TousProduitsComponent } from './tous-produits/tous-produits.component';

const routes: Routes = [
  {path:'admin',component:LoginAdminComponent,canActivate:[AdminGuard]},
  {path:'admin',
  children:[
    //{path:'', redirectTo:'acceuil', pathMatch:'full'},
    {path:'loginadmin',component:LoginAdminComponent},
    
    {path:'dash',component:DashboardComponent,canActivate:[AdminGuard],children:
  [ 
    {path:'', redirectTo:'acceuil', pathMatch:'full'},
    {path:'tousprod',component:TousProduitsComponent},
    {path:'acceuil',component:AcceuilComponent},
    {path:'levres',component:LevresComponent},
    {path:'teints',component:TeintComponent},
    {path:'yeux',component:YeuxComponent},
    {path:'marque',component:MarqueComponent},
    {path:'about',component:AboutComponent},
    {path:'add',component:AddProductComponent},
  ]},
  
 
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
