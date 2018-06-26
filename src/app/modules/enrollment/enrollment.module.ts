import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentComponent } from './enrollment/enrollment.component';

@NgModule({
  imports: [
    CommonModule,  BrowserModule, BrowserAnimationsModule , MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatRadioModule,
    MatIconModule, MatDatepickerModule, MatSelectModule, MatListModule,
    MatCheckboxModule, MatCardModule, EnrollmentRoutingModule, MatButtonModule
  ],
  providers: [EnrollmentService],

  declarations: [EnrollmentComponent]
})
export class EnrollmentModule { }
