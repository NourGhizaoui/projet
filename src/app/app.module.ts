import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { AdminGuard } from './admin/admin.guard';
import { AuthService } from './admin/Services/auth.service';
import { ProducatservicesService } from './admin/Services/producatservices.service';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';


@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    BrowserModule,
    ClientModule,
    AdminModule,
    AppRoutingModule,
  
   
  ],
  providers: [AdminGuard,AuthService,ProducatservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
