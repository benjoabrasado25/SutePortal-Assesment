import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SutePortalService } from '../services/sute-portal.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-maintenance-request-list',
  templateUrl: './maintenance-request-list.component.html',
  styleUrls: ['./maintenance-request-list.component.css']
})
export class MaintenanceRequestListComponent implements OnInit {

  displayedColumns = ["unitNumber", "name", "email", "serviceType", "summary", "details", "action"];
  maintenance_request_list: any = [];
  dataSource: any = [];

  constructor(
    public spService: SutePortalService,
    public router: Router
    ) { }

  ngOnInit(): void {
    let sesh = localStorage.getItem("splogin");
    if(!sesh){
      this.router.navigateByUrl("/admin")
    }
    this.spService.getMaintenanceRequest().then((data: any = [])=>{
      this.dataSource = new MatTableDataSource(data);
      this.maintenance_request_list = data;
    })   
  }

  closeMaintenanceRequest(id){
    if (confirm("Are you sure you want to close this?") == true) {
      let index = this.maintenance_request_list.findIndex(x=> x["id"] === id);
      if(index > -1){
        this.maintenance_request_list[index]["close"] = true;
        this.dataSource = new MatTableDataSource(this.maintenance_request_list);
        this.dataSource._updateChangeSubscription()
        this.spService.closeMaintenanceRequest(id);
      }
    }
  }

}
