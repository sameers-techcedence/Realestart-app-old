import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { PasswordResetComponent } from './password-reset.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    PasswordResetRoutingModule,
    ReactiveFormsModule
  ]
})
export class PasswordResetModule { }
