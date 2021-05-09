import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PersonComponent } from './views/person/person.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { WindowsComponent } from './components/windows/windows.component';

import { DataTablesModule } from 'angular-datatables'
import { HttpClientModule } from '@angular/common/http'

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ApiComponent } from './core/api/api.component';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PatientComponent } from './views/patient/patient.component';
import { PatientCreateComponent } from './views/patient/patient-create/patient-create.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonsComponent } from './components/template/footer/buttons/buttons.component';
import { PatientFormCreateComponent } from './views/patient/patient-create/patient-form-create/patient-form-create.component';
import { PersonCreateComponent } from './views/person/person-create/person-create.component';
import { PersonFormCreateComponent } from './views/person/person-create/person-form-create/person-form-create.component';


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
    WindowsComponent,
    SidenavComponent,
    PatientComponent,
    PatientCreateComponent,
    ButtonComponent,
    ButtonsComponent,
    PatientFormCreateComponent,
    PersonCreateComponent,
    PersonFormCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
