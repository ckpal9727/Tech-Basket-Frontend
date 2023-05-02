import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { NavbarComponent } from './Admin/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loginAndRegister', component: LoginAndRegisterComponent },
  { path: 'AddProduct', component: AddProductComponent },
  { path: 'admin', component: NavbarComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginAndRegisterComponent,
    AddProductComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
