import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AboutComponent } from './about/about.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LevresComponent } from './categories/levres/levres.component';
import { YeuxComponent } from './categories/yeux/yeux.component';
import { TeintComponent } from './categories/teint/teint.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MarqueComponent } from './marque/marque.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { TousProduitsComponent } from './tous-produits/tous-produits.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminGuard } from './admin.guard';
import { AuthService } from './Services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ProducatservicesService } from './Services/producatservices.service';


@NgModule({
  declarations: [
    LoginAdminComponent,
    AboutComponent,
    AcceuilComponent,
    LevresComponent,
    YeuxComponent,
    TeintComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MarqueComponent,
    NavComponent,
    SearchComponent,
    TousProduitsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
  
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [AdminGuard,AuthService,ProducatservicesService],
  
})
export class AdminModule { }
