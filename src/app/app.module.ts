import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FacialComponent } from './beautyservices/facial/facial.component';
import { HairspaComponent } from './beautyservices/hairspa/hairspa.component';
import { BridalComponent } from './beautyservices/bridal/bridal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesageComponent } from './mesage/mesage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutusComponent,
    NavbarComponent,
    FooterComponent,
    FacialComponent,
    HairspaComponent,
    BridalComponent,
    LoginComponent,
    MesageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
