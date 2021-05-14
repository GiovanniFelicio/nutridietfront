import { EnumPersonRoutes } from './views/person/models/enum-person.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './views/patient/patient.component';

const routes: Routes = [
  EnumPersonRoutes.PERSON,
  EnumPersonRoutes.PERSONMANAGER,
  EnumPersonRoutes.PERSONMANAGERID,
  {path: 'patient', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
