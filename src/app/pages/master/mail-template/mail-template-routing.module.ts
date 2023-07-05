import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: { title: 'Mail Template List', display:true, href:"" }
  },
  {
    path: 'add',
    component: AddComponent,
    data: { title: 'Add Mail Template', display:true, href:"" }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: { title: 'Edit Mail Template', display:true, href:"" }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: { title: 'View Mail Template', display:true, href:"" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailTemplateRoutingModule { }
