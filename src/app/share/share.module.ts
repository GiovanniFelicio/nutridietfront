import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { ContentComponent } from './template/content/content.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { DatatableComponent } from './datatable/datatable.component';

import { DataTablesModule } from 'angular-datatables'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    NavComponent,
    DatatableComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    NavComponent,
    DatatableComponent]
})
export class ShareModule { }
