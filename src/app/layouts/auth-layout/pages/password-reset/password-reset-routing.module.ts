import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetComponent } from './password-reset.component';

const routes: Routes = [
  {
    path: '', redirectTo : '/login', pathMatch : 'full'
  },
  {
    path: ':token/:email', component: PasswordResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordResetRoutingModule { }
