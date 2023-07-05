import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailTemplateRoutingModule } from './mail-template-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MailTemplateRoutingModule,
    QuillModule.forRoot(),
    DataTablesModule,
    ReactiveFormsModule
  ]
})
export class MailTemplateModule { }
