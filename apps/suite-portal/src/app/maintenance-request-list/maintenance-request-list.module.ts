import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceRequestListComponent } from './maintenance-request-list.component';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MaintenanceRequestListComponent],
  exports: [MaintenanceRequestListComponent]
})
export class MaintenanceRequestListModule { }
