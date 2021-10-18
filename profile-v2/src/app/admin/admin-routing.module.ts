import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'messages',
        component: MessagesComponent
      },
      {
        path:'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
