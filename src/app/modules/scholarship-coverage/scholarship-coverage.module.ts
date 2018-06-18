import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ScholarshipCoverageComponent } from '../scholarship-coverage/scholarship-coverage/scholarship-coverage.component';
import { ScholarshipCoverageService } from './scholarship-coverage.service';
import { ScholarshipCoverageRoutingModule } from './scholarship-coverage-routing.module';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, ScholarshipCoverageRoutingModule,
    MatInputModule, MatFormFieldModule, MatListModule,
    MatCheckboxModule, MatCardModule, MatButtonModule, CommonModule, MatStepperModule
  ],
  declarations: [ScholarshipCoverageComponent],
  providers: [ScholarshipCoverageService]
})
export class ScholarshipCoverageModule { }
