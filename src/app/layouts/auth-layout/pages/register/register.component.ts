import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: any;
  registerFormSubmitted = false;

  constructor( 
    private authService : AuthService,
    private router : Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      agentLicenceNo: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  submitForm(){
    this.registerFormSubmitted = true;
    if (this.registerForm.valid){
      this.authService
      .register(this.registerForm.value,(response:boolean)=>{
        if(response){
          this.router.navigate(['login']);
        }
      });
    }
  }
}
