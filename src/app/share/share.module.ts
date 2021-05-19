import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { ContentComponent } from './template/content/content.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';

import { DataTablesModule } from 'angular-datatables'
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component'
import { DatatableServerSideComponent } from './datatable-server-side/datatableserver-side.component';
import { DatatableComponent } from './datatable/datatable.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CleanComponent } from './layouts/clean/clean.component';
import { MainComponent } from './layouts/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    NavComponent,
    DatatableServerSideComponent,
    CardComponent,
    DatatableComponent,
    CleanComponent,
    MainComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    NavComponent,
    DatatableServerSideComponent,
    CardComponent,
    DatatableComponent,
    CleanComponent,
    MainComponent,
    NotFoundComponent]
})
export class ShareModule { }
