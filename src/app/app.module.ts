import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FilterNavComponent } from './filter-nav/filter-nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BuscarPipe } from './pipes/buscar.pipe';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    // Aqui se agregan componentes de forma manual
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    FilterNavComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    BuscarPipe,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // SE AGREGA LA CLASE CREADA EN EL PIPE
  providers: [BuscarPipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
