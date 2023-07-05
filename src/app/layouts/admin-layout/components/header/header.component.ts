import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/layouts/auth-layout/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  breadCrumb:any; 
  constructor(
    private authService : AuthService, 
    private router : Router,
  ) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.breadCrumb = this.getTitle(router.routerState, router.routerState.root);
        console.log(this.breadCrumb);
      }
    });
  }

  logout(){
    this.authService
    .logout('admin',(callback:boolean)=>{
      if(callback){
        this.router.navigate(['login']);
      }
    });
  }

  getTitle(state:any, parent:any):any {
    let data = [];
    if(parent && parent.snapshot.data?.title && parent.snapshot.data.display) {
      let url = {
        title : parent.snapshot.data.title,
        url : parent.snapshot.data.href || ""
      };
      data.push(url);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
