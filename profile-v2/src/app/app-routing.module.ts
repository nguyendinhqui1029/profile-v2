import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './main/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: '**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
