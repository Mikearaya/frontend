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
import { ScholarshipsComponent } from '../scholarships/scholarship/scholarships.component';
import { ScholarshipsService } from './scholarships.service';
import { ScholarshipRoutingModule } from './scholarship-routing.module';

@NgModule({
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, ScholarshipRoutingModule,
    MatInputModule, MatFormFieldModule, MatListModule,
    MatCheckboxModule, MatCardModule, MatButtonModule,
  ],
  declarations: [ ScholarshipsComponent],
  providers : [ScholarshipsService]

})
export class ScholarshipsModule { }
