import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  requestForm:any;
  requestFormSubmitted:boolean = false;
  constructor(
    public activeModal : NgbActiveModal,
    private authService : AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(){
    this.requestFormSubmitted = false;
    this.requestForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get requestFormControl() {
    return this.requestForm.controls;
  }

  submitForm(){
    this.requestFormSubmitted = true;
    if (this.requestForm.valid){
      this.authService
      .passwordRequest(this.requestForm.value.email,(response:boolean)=>{
        if(response){
          this.closeModal();
          this.resetForm();
        }
      });
    }
  }

  closeModal(){
    this.activeModal.dismiss();
  }
}
