import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [

  // Se agregan las rutas correspondientes a la URL
  {
    // En este caso, el path hace referencia a un objeto declarado como 'inicio'
    // y seguidamente, se hace mencion del componente
    path:'home',
    component: HomeComponent
  },{
    path:'contact',
    component: ContactComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path: 'sliders',
    component:SliderComponent
  },{
    path:'register',
    component: RegisterComponent
  },
  {
    // Se define una ruta por defecto con su componente por defecto
    path:'**',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
