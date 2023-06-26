import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes =[
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent },
  {path:'login', component:LoginComponent },
  {path:'singIn', component:RegistroComponent },
    
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(
      routes
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
