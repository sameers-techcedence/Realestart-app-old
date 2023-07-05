import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  passResetForm: any;
  passResetFormSubmitted = false;
  token: any='';

  constructor( 
    private authService : AuthService,
    private router : Router,
    private activeRoute :ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.token = this.activeRoute.snapshot.paramMap.get("token");
    this.checkToken();
   }

  ngOnInit(): void {
    this.passResetForm = this.fb.group({
      password: ['', [Validators.required]],
      passwordConfirmation: ['', Validators.required],
      token: [this.token, Validators.required],
    });
  }

  get passResetFormControl() {
    return this.passResetForm.controls;
  }

  submitForm(){
    this.passResetFormSubmitted = true;
    if (this.passResetForm.valid){
      this.authService
      .resetPassword(this.passResetForm.value,(response:boolean)=>{
        if(response){
          this.router.navigate(['login']);
        }
      });
    }
  }

  checkToken(){
    this.authService
    .checkPasswordToken(this.token,(response:boolean)=>{
      if(!response){
        this.router.navigate(['login']);
      }
    });
  }
}
