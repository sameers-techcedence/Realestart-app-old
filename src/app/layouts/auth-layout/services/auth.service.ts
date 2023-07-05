import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CommonService } from 'src/app/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService : ApiService,
    private commonService : CommonService,
    private spinner : NgxSpinnerService, 
    private toastrService: ToastrService
  ) { }

  register(postData:any, callBackStatus:any){
    this.spinner.show();
    this.apiService.register(postData).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }

  login(postData:any, callBackStatus:any){
    this.spinner.show();
    this.apiService.login(postData).subscribe((response)=>{
      if(response?.accessToken){
        localStorage.setItem("admin_token",response.accessToken);
        localStorage.setItem("admin_data",JSON.stringify(response.data));
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(response);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(response);
    });
  }

  logout(app:string, callBackStatus:any){
    this.spinner.show();
    if(this.commonService.logout(app)){
      localStorage.removeItem("portalware_token");
      localStorage.removeItem("portalware_data");
      this.spinner.hide();
      this.toastrService.success("Logout success");
      callBackStatus(true);
    }
    else{
      this.spinner.hide();
      this.toastrService.error("Something wrong try again later");
      callBackStatus(false);  
      return ;
    }
  }

  passwordRequest(email:string, callBackStatus:any){
    this.spinner.show();
    this.apiService.passwordRequest(email).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }

  checkPasswordToken(token:string, callBackStatus:any){
    this.spinner.show();
    this.apiService.checkPasswordToken(token).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }

  resetPassword(postData:any, callBackStatus:any){
    this.spinner.show();
    this.apiService.resetPassword(postData).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }
  
}
