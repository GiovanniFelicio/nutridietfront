import { PersonComponent } from './views/person/person.component';
import { PersonRoutes } from './views/person/person.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'

var personRoutes: any[] = new PersonRoutes().v1().windows

var routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

routes.push(...personRoutes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
