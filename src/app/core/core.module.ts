import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PersonComponent } from './views/person/person.component';
import { ManagerComponent } from './views/person/manager/manager.component';
import { PatientComponent } from './views/patient/patient.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PersonComponent,
    ManagerComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ShareModule
  ]
})
export class CoreModule { }
