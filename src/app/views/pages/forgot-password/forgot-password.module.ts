import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ComponentsModule } from 'src/app/core/lib/components/components.module';

const routes: Routes = [
  { path: '', component: ForgotPasswordComponent }
];



@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgotPasswordModule { }
