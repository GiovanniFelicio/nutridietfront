import { PersonComponent } from './views/person/person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './views/patient/patient.component';

const routes: Routes = [
  {path: 'person', component: PersonComponent, data:{header: 'pessoas'}},
  {path: 'patient', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
