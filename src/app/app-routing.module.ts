import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FacialComponent } from './beautyservices/facial/facial.component';
import { HairspaComponent } from './beautyservices/hairspa/hairspa.component';
import { BridalComponent } from './beautyservices/bridal/bridal.component';
import { LoginComponent } from './login/login.component';
import { MesageComponent } from './mesage/mesage.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"facial",component:FacialComponent},
  {path:"hair",component:HairspaComponent},
  {path:"bridal",component:BridalComponent},
  { path: 'login', component: LoginComponent},
  {path:"message",component:MesageComponent},


  {path:"",redirectTo:"home",pathMatch:"full"},
  // { path: '**', component: PagenotfoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
