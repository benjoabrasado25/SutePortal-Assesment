import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,  } from '@angular/forms';
import { SutePortalService } from '../services/sute-portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public spService: SutePortalService,
    public router: Router
    ) { }

  ngOnInit(): void {
    let sesh = localStorage.getItem("splogin");
    if(sesh){
      this.router.navigateByUrl("/maintenance-list")
    }

    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.required]
      });    
  }

  async submitRequest(){
    await this.spService.login(
      {
        "email": this.form.get("email").value,
        "password": this.form.get("password").value
      }
      ).then(
        async (result)=>{
          if(result["user"]["email"]){
            await localStorage.setItem("splogin", JSON.stringify({loggedin: true}));
            await this.router.navigateByUrl("/maintenance-list")
          }
          else{
            alert(result["user"]["message"]);
          }
        },
        (err)=>{
          alert("Login Failed")
        }
    ) 
  }

}
