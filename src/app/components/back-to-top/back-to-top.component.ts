import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {
  ngAfterViewInit() {
    this.loadScripts();
  }

  loadScripts() { 
    var backtotop = document.querySelector("a.back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop?.classList.add('active')
        } else {
          backtotop?.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      this.onscroll(document, toggleBacktotop)
    }
  }

  onscroll = (el:any, listener:any) => {
    el.addEventListener('scroll', listener)
  }

  goToTop(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    }); 
  }
}
