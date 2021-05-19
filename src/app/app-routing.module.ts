import { AuthGuard } from './architecture/guards/auth.guard';
import { CleanComponent } from './share/layouts/clean/clean.component';
import { AuthComponent } from './architecture/components/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './share/not-found/not-found.component';
import { MainComponent } from './share/layouts/main/main.component';

var routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {path: "core", loadChildren: () => import('./core/core.module').then(c => c.CoreModule)},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: CleanComponent,
    children:[
      {path: "auth", component: AuthComponent},
      {path: '404', component: NotFoundComponent},
      {path: '**', component: NotFoundComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
