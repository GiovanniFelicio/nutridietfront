import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PersonComponent } from './views/person/person.component';
import { DatatableComponent } from './components/datatable/datatable.component';

import { DataTablesModule } from 'angular-datatables'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiComponent } from './core/api/api.component';
import { WindowsComponent } from './core/windows/windows.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    HomeComponent,
    NavComponent,
    PersonComponent,
    DatatableComponent,
    ApiComponent,
    WindowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DataTablesModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
