import { EnumPersonPath } from './common/enum/person/enum-person.path';
import { PersonManagerComponent } from './components/views/person/person-manager/person-manager.component';
import { PersonComponent } from './components/views/person/person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: EnumPersonPath.PERSON, component: PersonComponent, data: {header: "Pessoas"}},
  {path: EnumPersonPath.PERSONMANAGER, component: PersonManagerComponent, data:{header: "Gerenciamento de Pessoas"}},
  {path: EnumPersonPath.PERSONMANAGERID, component: PersonManagerComponent, data:{header: "Gerenciamento de Pessoas"}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
