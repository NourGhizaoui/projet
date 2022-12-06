import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CartComponent } from './cart/cart.component';
import { LevresComponent } from './categories/levres/levres.component';
import { TeintComponent } from './categories/teint/teint.component';
import { YeuxComponent } from './categories/yeux/yeux.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MarqueComponent } from './marque/marque.component';
import { SignupComponent } from './signup/signup.component';
import { TousProduitsComponent } from './tous-produits/tous-produits.component';


const routes: Routes = [
  {path:'', component:DashboardComponent,
  children:[
    {path:'', redirectTo:'acceuil', pathMatch:'full'},
    {path:'tousprod',component:TousProduitsComponent},
    {path:'acceuil',component:AcceuilComponent},
    {path:'levres',component:LevresComponent},
    {path:'teints',component:TeintComponent},
    {path: 'detail/:id', component: DetailProduitComponent},
    {path:'yeux',component:YeuxComponent},
    {path:'marque',component:MarqueComponent},
    {path:'cart',component:CartComponent},
    {path:'contact',component:ContactComponent},
   // {path:'inscrire',component:SignupComponent},
    {path:'about',component:AboutComponent},
    {path:'login', component: LoginComponent, canActivate: [AuthGuard] },
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

