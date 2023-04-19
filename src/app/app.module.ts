import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Campamento/listar/listar.component';
import { AddComponent } from './Campamento/add/add.component';
import { EditComponent } from './Campamento/edit/edit.component';

import{FormsModule}from '@angular/forms'
import{ServiceService}from '../app/Service/service.service'
import{HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
