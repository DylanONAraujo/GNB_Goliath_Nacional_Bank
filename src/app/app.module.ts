import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './views/custom-layout/custom-layout.module';
import { FormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ForgotPasswordModule } from './views/pages/forgot-password/forgot-password.module';
import { LoginModule } from './views/pages/login/login.module';
import { DashboardModule } from './views/pages/dashboard/dashboard.module';


const globalFormFieldOptions: MatFormFieldDefaultOptions = {
  appearance: "standard",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ForgotPasswordModule,
    LoginModule,
    DashboardModule,

    // Vex
    VexModule,
    CustomLayoutModule,
    MatSlideToggleModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: globalFormFieldOptions,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
