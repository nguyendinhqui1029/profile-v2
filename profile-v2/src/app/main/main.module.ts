import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  exports: [],
  providers: [],
})
export class MainModule {}
