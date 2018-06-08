import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { EmployeeComponent } from '../employee/employe/employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeRoutingModule } from './employe-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
     EmployeeComponent
],
  imports: [
    BrowserModule, BrowserAnimationsModule , MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatRadioModule,
    MatIconModule, MatDatepickerModule, MatSelectModule, MatListModule,
    MatCheckboxModule, MatCardModule, EmployeeRoutingModule, MatButtonModule
  ],
  providers: [EmployeeService],

  exports: [],
})

export class EmployeeModule { }
