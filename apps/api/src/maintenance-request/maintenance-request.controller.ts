import { BadRequestException, Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';
import { MaintenanceRequestService } from './maintenance-request.service';

@Controller('maintenance-requests')
export class MaintenanceRequestController {

  constructor(
    private readonly maintenanceRequestService: MaintenanceRequestService,
  ) {
    //
  }

  @Post('/')
  public async createMaintenanceRequest(
    @Body() maintenanceRequest: MaintenanceRequest,
  ) {
    if (!maintenanceRequest?.name) {
      throw new BadRequestException('Must provide a valid name');
    }
    if (!maintenanceRequest?.unitNumber) {
      throw new BadRequestException('Must provide a valid unit number');
    }
    if (!maintenanceRequest?.email) {
      throw new BadRequestException('Must provide a valid unit email');
    }
    if (!maintenanceRequest?.summary) {
      throw new BadRequestException('Must provide a valid summary');
    }
    if (!maintenanceRequest?.serviceType) {
      throw new BadRequestException('Must provide a valid Service Type');
    }
    if (!maintenanceRequest?.details) {
      throw new BadRequestException('Must provide a valid unit details');
    }
    maintenanceRequest["close"] = false;
    return await this.maintenanceRequestService.createMaintenanceRequest(maintenanceRequest);
  }

  @Post('/login')
  public async loginWithEmailAndPassword(
    @Body() maintenanceRequest: MaintenanceRequest,
  ) {
    if (!maintenanceRequest?.email) {
      throw new BadRequestException('Must provide a email name!');
    }
    if (!maintenanceRequest?.password) {
      throw new BadRequestException('Password Cannot be empty!');
    }

    return await this.maintenanceRequestService.loginWithEmailAndPassword(maintenanceRequest.email, maintenanceRequest.password);
  }

  @Get('/:id')
  public async getMaintenanceRequest(
    @Param('id') id: string,
  ) {
    if (!id) {
      throw new BadRequestException('No id provided');
    }
    return await this.maintenanceRequestService.getMaintenanceRequest(id);
  }
  @Put('/:id/close')
  public async closeMaintenanceRequest(
    @Param('id') id: string,
  ) {
    if (!id) {
      throw new BadRequestException('No id provided');
    }
    return await this.maintenanceRequestService.closeMaintenanceRequest(id);
  }

  @Get('/')
  public async getMaintenanceRequestList() {
    return await this.maintenanceRequestService.getMaintenanceRequestList();
  }  

}
