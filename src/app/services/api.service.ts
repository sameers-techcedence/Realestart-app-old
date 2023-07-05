import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:any;
  constructor(private httpClient: HttpClient, private commonService : CommonService) { }
  
  getHeader(app:string="admin"){
    return this.headers = this.commonService.getAuthHeader(app);
  }

  /* Authentication API Start */
  login(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/auth/login`, postData);
  }

  register(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/auth/register`, postData);
  }

  passwordRequest(email:string){
    return this.httpClient.get<any>(`${environment.apiURL}/auth/forgotPassword/${email}`);
  }

  checkPasswordToken(token:string){
    return this.httpClient.get<any>(`${environment.apiURL}/auth/password/token/${token}`);
  }

  resetPassword(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/auth/resetPassword`, postData);
  }
  /* Authentication API END */
  
  /* Email Template Start */
  paginateEmailTemplate(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/email/template/list`, postData, {headers:this.getHeader()});
  }

  createEmailTemplate(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/email/template`, postData, {headers:this.getHeader()});
  }

  getEmailTemplate(id:number){
    return this.httpClient.get<any>(`${environment.apiURL}/email/template/${id}`, {headers:this.getHeader()});
  }

  updateEmailTemplate(id:number, postData:any){
    return this.httpClient.put<any>(`${environment.apiURL}/email/template/${id}`, postData, {headers:this.getHeader()});
  }

  deleteEmailTemplate(id:number){
    return this.httpClient.delete<any>(`${environment.apiURL}/email/template/${id}`, {headers:this.getHeader()});
  }

  getAllEmailTemplates(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/email/template/all`, postData , {headers:this.getHeader()});
  }
  /* Email Template END */



  /* Roles Start */
  paginateToolsRoles(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/roles/paginate`, postData, {headers:this.getHeader()});
  }

  createToolsRoles(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/roles`, postData, {headers:this.getHeader()});
  }

  getToolsRoles(id:number){
    return this.httpClient.get<any>(`${environment.apiURL}/roles/${id}`, {headers:this.getHeader()});
  }

  updateToolsRoles(id:number, postData:any){
    // console.log(id);
    // console.log(postData);

    return this.httpClient.put<any>(`${environment.apiURL}/roles/${id}`, postData, {headers:this.getHeader()});
  }

  deleteToolsRoles(id:number){
    return this.httpClient.delete<any>(`${environment.apiURL}/roles/${id}`, {headers:this.getHeader()});
  }

  getAllToolsRoles(postData:any){
    return this.httpClient.post<any>(`${environment.apiURL}/roles/all`, postData , {headers:this.getHeader()});
  }

  /* Roles END */
}
