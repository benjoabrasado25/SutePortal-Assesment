import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MaintenanceRequestListComponent } from './maintenance-request-list/maintenance-request-list.component';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { MaintenanceRequestListModule } from './maintenance-request-list/maintenance-request-list.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'maintenance-list',
    component: MaintenanceRequestListComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    HomeModule,
    MaintenanceRequestListModule,
    AdminModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      enableTracing: true,
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
