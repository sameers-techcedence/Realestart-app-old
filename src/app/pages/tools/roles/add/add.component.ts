import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
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
    private rolesService :  RolesService,
    private router : Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.templateForm = this.fb.group({
      roleNameInEn: ['', [Validators.required]],
      isActive: ['', Validators.required],
      // TextEn: ['', Validators.required],
    });
  }

  get templateFormControl() {
    return this.templateForm.controls;
  }

  submitForm(){
    this.templateFormSubmitted = true;
    if (this.templateForm.valid){
      this.rolesService
      .create(this.templateForm.value,(response:boolean)=>{
        if(response){
          this.router.navigate(['roles']);
        }
      });
    }
  }

  editorCreated(evt:any){
    console.log("created");
  }
}
