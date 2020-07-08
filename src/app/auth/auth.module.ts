import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginComponent, SingupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule

  ],
  exports:[LoginComponent,SingupComponent]
})
export class AuthModule { }
