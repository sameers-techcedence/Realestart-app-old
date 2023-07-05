import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private commonService : CommonService, private router : Router){}
  canActivate(){
    if(this.commonService.isAdminLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
