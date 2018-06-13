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
import {ScholarshipTypeComponent} from '../scholarship-type/scholarship-typ/scholarship-type.component';
import {ScholarshipTypeService} from './scholarship-type.service';
import {ScholarshipTypeRoutingModule} from './scholarship-type-routing.module';

@NgModule({
  imports: [  BrowserModule, BrowserAnimationsModule , MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, ScholarshipTypeRoutingModule,
    MatInputModule, MatFormFieldModule, MatListModule,
    MatCheckboxModule, MatCardModule, MatButtonModule, CommonModule
  ],
  declarations: [ScholarshipTypeComponent],
  providers: [ScholarshipTypeService],
  exports: [ScholarshipTypeComponent]
})
export class ScholarshipTypeModule { }
