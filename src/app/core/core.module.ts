import { PersonComponent } from './components/views/person/person.component';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PersonManagerComponent } from './components/views/person/person-manager/person-manager.component';
import { PatientComponent } from './components/views/patient/patient.component';
import { ShareModule } from '../share/share.module';

import { ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './components/tab/tab.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule }   from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    PersonComponent,
    PersonManagerComponent,
    PatientComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ShareModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatExpansionModule
  ]
})
export class CoreModule {

  static injector: Injector;
  
  constructor(injector: Injector) {
    CoreModule.injector = injector;
  }
}
