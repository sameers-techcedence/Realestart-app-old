import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  isAdminLoggedIn(){
    const token = localStorage.getItem('admin_token');
    return (token && token.length > 0);
  }

  getAuthHeader(app:string){
    let headers;
    if(app === 'admin'){
      let token = localStorage.getItem("admin_token");
      headers = new HttpHeaders().set("access-token", ""+token); // "Bearer " + token
    }
    return headers;
  }

  userData(app:string){
    let userData;
    if(app === 'admin'){
      userData = localStorage.getItem("admin_data");
    }
    return userData?JSON.parse(userData):userData;
  }

  logout(app:string){
    let userData;
    if(app === 'admin'){
      userData = localStorage.getItem("admin_data");
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_data");
    }
    return true;
  }

  customAlert(alertData:any){    
    Swal.fire({
      title: alertData.title,
      text: alertData.message,
      icon: alertData.icon || 'warning',
      showCancelButton: alertData.showCancelButton,
      confirmButtonText: alertData.confirmButtonText || 'Ok',
      denyButtonText: alertData.denyButtonText || 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        alertData.confirmCallback();
      } else if (result.isDenied) {
        alertData.denyCallback();
      }    
    });
  }
}
