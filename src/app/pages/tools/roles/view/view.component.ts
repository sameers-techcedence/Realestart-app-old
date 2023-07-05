import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  RolesService } from '../services/roles.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  viewData :any = {};
  id : any;

  constructor( 
    private activeRoute :ActivatedRoute,
    private rolesService :  RolesService
  ) { 
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.getData();
  }

  getData() {
    this.rolesService.view(this.id,(response:any)=>{
      if(response?.statusCode == 200)
      console.log(response)
        this.viewData = response.data;

    }); 
  }
}
