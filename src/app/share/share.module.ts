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

import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    NavComponent,
    DatatableServerSideComponent,
    CardComponent,
    DatatableComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    NavComponent,
    DatatableServerSideComponent,
    CardComponent,
    DatatableComponent]
})
export class ShareModule { }
