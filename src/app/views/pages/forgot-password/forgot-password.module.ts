import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ComponentsModule } from 'src/app/core/lib/components/components.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';





@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSnackBarModule,
    ForgotPasswordRoutingModule,

  ]
})
export class ForgotPasswordModule { }
