import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
 
 


@NgModule({
  declarations: [ 
            AddComponent,
            EditComponent,
            ListComponent,
            ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RolesRoutingModule,
    QuillModule.forRoot(),
    DataTablesModule,
    ReactiveFormsModule
  ],
})
export class Rolesmodule { }
