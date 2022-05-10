import { Injectable } from '@nestjs/common';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';
import { MaintenanceRequestDao, MaintenanceRequestDB } from './maintenance-request.dao';

@Injectable()
export class MaintenanceRequestService {

  constructor(
    private readonly maintReqDao: MaintenanceRequestDao,
  ) {
    //
  }

  async createMaintenanceRequest(maintenanceRequest: MaintenanceRequest) {
    return await this.maintReqDao.insertNewRequest(maintenanceRequest);
  }

  async getMaintenanceRequest(id: string): Promise<MaintenanceRequestDB> {
    return await this.maintReqDao.getMaintenanceRequest(id);
  }

  async getMaintenanceRequestList(): Promise<MaintenanceRequestDB>{
    return await this.maintReqDao.getMaintenanceRequestList();
  }

  async loginWithEmailAndPassword(email, password){
    return await this.maintReqDao.loginWithEmailAndPassword(email, password);
  }

  async closeMaintenanceRequest(id): Promise<MaintenanceRequestDB>{
    return await this.maintReqDao.closeMaintenanceRequest(id);
  }
}
