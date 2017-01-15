import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main_site/home.component';

import { AppRoutingModule } from './app-routing.module';
import {DashboardComponent} from "./admin/dashboard.component";
import {NavbarComponent} from "./main_site/navbar/navbar.component";
import {AdminNavbarComponent} from "./admin/navbar-admin/navbar-admin.component";

@NgModule({
  imports:      [ 
  	BrowserModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    AdminNavbarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
