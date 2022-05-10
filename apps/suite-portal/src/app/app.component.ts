import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'suite-portal';
  loggedin: boolean = false;
  constructor(private router: Router){
    this.router.events.subscribe((val) => {
      let sesh = localStorage.getItem("splogin");
      if(sesh){
        this.loggedin = true
      }
      else{
        this.loggedin = false;
      }
    });    
  }

  async logout(){
    await localStorage.removeItem("splogin");
    this.loggedin = false;
    await this.router.navigateByUrl("/admin");
  }

}
