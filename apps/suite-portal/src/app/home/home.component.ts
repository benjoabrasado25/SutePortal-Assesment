import { Component, OnInit } from '@angular/core';
import { ALL_SERVICE_TYPES } from '@suiteportal/api-interfaces';
import { Validators, FormBuilder, FormGroup,  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SutePortalService } from '../services/sute-portal.service';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  serviceTypes = ALL_SERVICE_TYPES;

  constructor(
    public formBuilder: FormBuilder,
    public spService: SutePortalService
    ) {
    //
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      unitNumber: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      serviceType: ['', Validators.required],
      summary: ['', Validators.required],
      details: ['', Validators.required]
      });
  }

  async submitRequest(){
    await this.spService.addMaintenancRequest({
      name: this.form.get("name").value,
      unitNumber: this.form.get("unitNumber").value,
      email: this.form.get("email").value,
      serviceType: this.form.get("serviceType").value,
      summary: this.form.get("summary").value,
      details: this.form.get("details").value
    }).then(async ()=>{
      alert("Maintenance Request has been submitted!")
      await this.form.reset();
    })

  }

}
