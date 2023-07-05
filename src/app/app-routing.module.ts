import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutRouting } from './layouts/admin-layout/admin-layout-routing.module';
import { AuthLayoutRouting } from './layouts/auth-layout/auth-layout-routing.module';

const routes: Routes = [
  { path : '' , redirectTo : '/login' , pathMatch : 'full' },
  ...AuthLayoutRouting,
  ...AdminLayoutRouting,
  { path : '**' , redirectTo : '/login' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
