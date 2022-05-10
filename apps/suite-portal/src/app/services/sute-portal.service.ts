import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SutePortalService {

  local_url="http://localhost:3333/api"

  constructor(
    public httpreq: HttpClient
  ) {

  }

  addMaintenancRequest(data){
    return new Promise((resolve, reject)=>{
      this.httpreq.post(`${this.local_url}/maintenance-requests`, data).subscribe((res:any)=>{
        if(res){
          resolve();
        }
      },
      (err)=>{
        console.log("error", err.message)
        reject();
      })

    })
  }

  login(data){
    return new Promise((resolve, reject)=>{
      this.httpreq.post(`${this.local_url}/maintenance-requests/login`, data).subscribe((res:any)=>{
        if(res){
          resolve(res);
        }
      },
      (err)=>{
        console.log("error", err.message)
        reject();
      })

    })
  }

  getMaintenanceRequest(){
    return new Promise((resolve, reject)=>{
      this.httpreq.get(`${this.local_url}/maintenance-requests`).toPromise().then((data)=>{
         resolve(data)
      })           
    })
  }

  closeMaintenanceRequest(id){
    return new Promise((resolve, reject)=>{
      this.httpreq.put(`${this.local_url}/maintenance-requests/${id}/close`, {}).subscribe((res: any) => {
        console.log("Success")
        resolve();
      });         
    }) 
  }

}
