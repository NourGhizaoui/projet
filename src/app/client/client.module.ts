import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LevresComponent } from './categories/levres/levres.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { TeintComponent } from './categories/teint/teint.component';
import { YeuxComponent } from './categories/yeux/yeux.component';
import { MarqueComponent } from './marque/marque.component';
import { TousProduitsComponent } from './tous-produits/tous-produits.component';
import { SearchComponent } from './search/search.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    LevresComponent,
    AboutComponent,
    FooterComponent,
    TeintComponent,
    YeuxComponent,
    MarqueComponent,
    TousProduitsComponent,
    SearchComponent,
    AcceuilComponent,
    DetailProduitComponent,
    LoginComponent,
    CartComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ClientModule { }
