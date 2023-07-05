import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ForgetPasswordComponent } from '../../components/forget-password/forget-password.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  loginFormSubmitted = false;
 
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }
  
 

  submitForm() {
    this.loginFormSubmitted = true;
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value, (response: any) => {
          if (response?.accessToken) {
            this.router.navigate(['dashboard']);
          }
        });
    }
  }

  openModal() {
    this.modalService.open(ForgetPasswordComponent, { ariaLabelledBy: 'modal-basic-title', modalDialogClass: "modal-dialog-centered" });
  }

}
