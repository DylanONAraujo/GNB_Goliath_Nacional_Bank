import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login.component';
import { ComponentsModule } from 'src/app/core/lib/components/components.module';
import { LoginRoutingModule } from './login-routing.module';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSnackBarModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
