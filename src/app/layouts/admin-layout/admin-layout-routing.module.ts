import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/gaurds/auth.guard';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRouting: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
        import('../../pages/dashboard/dashboard.module').then(
          (m) => m.DashboardModule
        ),
        data: { title: 'Dashboard', display:false, href:"dashboard" },
      },
      {
        path: 'mail-template',
        loadChildren: () =>
        import('../../pages/master/mail-template/mail-template.module').then(
          (m) => m.MailTemplateModule
        ),
        data: { title: 'Master', display:true, href:"" },
      },
      {
        path: 'roles',
        loadChildren: () =>
        import('../../pages/tools/roles/roles.module').then(
          (m) => m.Rolesmodule
        ),
        data: { title: 'Tools', display:true, href:"" },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRouting)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
