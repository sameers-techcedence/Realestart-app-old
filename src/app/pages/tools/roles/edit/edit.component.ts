import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { RolesService } from '../services/roles.service';
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
    private rolesService :  RolesService,
    private activeRoute :ActivatedRoute,
    private router : Router,
    private fb: FormBuilder
  ) { 
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.getData();
  }

  ngOnInit(): void {
    this.templateForm = this.fb.group({
      roleNameInEn: ["", [Validators.required]],
      isActive: ["", Validators.required],
      // UpdatedBy: ["", Validators.required],
    });
  }

  getData () {
    if(!isNaN(this.id) && typeof +this.id == "number"){
      this.rolesService.view(this.id,(response:any)=>{
        console.log(response);
        if(response?.statusCode == 200 && response.data){
        console.log(response.data);
          this.templateForm = this.fb.group({
            roleNameInEn: [response.data?.RoleNameInEn, [Validators.required]],
            isActive: [response.data?.IsActive, Validators.required],
          });
        }
        else{
          this.router.navigate(['roles']);
        }
      }); 
    }
    else{
      this.router.navigate(['roles']);
    }
  }

  get templateFormControl() {
    return this.templateForm.controls;
  }

  submitForm(){
    this.templateFormSubmitted = true;
    if (this.templateForm.valid){
      // console.log(this.templateForm.value);
      this.rolesService
      .update(this.id, this.templateForm.value,(response:boolean)=>{
        if(response){
          this.router.navigate(['roles']);
        }
      });
    }
  }
}