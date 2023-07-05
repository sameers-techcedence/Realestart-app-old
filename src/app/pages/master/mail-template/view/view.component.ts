import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailTemplateService } from '../services/mail-template.service';

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
    private mailTemplateService : MailTemplateService
  ) { 
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.getData();
  }

  getData() {
    this.mailTemplateService.view(this.id,(response:any)=>{
      if(response?.statusCode == 200)
        this.viewData = response.data;
    }); 
  }
}
