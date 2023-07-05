import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { MailTemplateService } from '../services/mail-template.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  id : any;
  viewData:any;
  editorStyle = {
    minHeight: '200px', 
    width: '100%'
  };
  config = {
    toolbar:[
      [{font:[]},{size:[]}],
      ["bold","italic","underline","strike"],
      [{color:[]},{background:[]}],
      [{script:"super"},{script:"sub"}],
      [{header:[!1,1,2,3,4,5,6]},"blockquote","code-block"],
      [{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],
      ["direction",{align:[]}],
      ["link","image","video"],
      ["clean"]
    ]
  };

  templateForm: any;
  templateFormSubmitted = false;

  constructor( 
    private mailTemplateService : MailTemplateService,
    private activeRoute :ActivatedRoute,
    private router : Router,
    private fb: FormBuilder
  ) { 
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.getData();
  }

  ngOnInit(): void {
    this.templateForm = this.fb.group({
      Slug: ["", [Validators.required]],
      SubjectEn: ["", Validators.required],
      TextEn: ["", Validators.required],
    });
  }

  getData () {
    if(!isNaN(this.id) && typeof +this.id == "number"){
      this.mailTemplateService.view(this.id,(response:any)=>{
        if(response?.statusCode == 200 && response.data){
          this.templateForm = this.fb.group({
            Slug: [response.data?.Slug, [Validators.required]],
            SubjectEn: [response.data?.SubjectEn, Validators.required],
            TextEn: [response.data?.TextEn, Validators.required],
          });
        }
        else{
          this.router.navigate(['mail-template']);
        }
      }); 
    }
    else{
      this.router.navigate(['mail-template']);
    }
  }

  get templateFormControl() {
    return this.templateForm.controls;
  }

  submitForm(){
    this.templateFormSubmitted = true;
    if (this.templateForm.valid){
      this.mailTemplateService
      .update(this.id, this.templateForm.value,(response:boolean)=>{
        if(response){
          this.router.navigate(['mail-template']);
        }
      });
    }
  }

}
