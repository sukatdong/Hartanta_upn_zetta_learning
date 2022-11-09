import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    EmployeeDetailComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatButtonModule


  ]
})
export class EmployeeModule { }
