import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {path: "core", loadChildren: () => import('./core/core.module').then(c => c.CoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
