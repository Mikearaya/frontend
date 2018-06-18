import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FeeTypeService } from './fee-type.service';
import { FeeTypeRoutingModule } from './fee-type-routing.module';
import { FeeTypeComponent } from './fee-type/fee-type.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatRadioModule,
    MatIconModule, MatDatepickerModule, MatSelectModule, MatListModule,
    MatCheckboxModule, MatCardModule, FeeTypeRoutingModule, MatButtonModule
  ],
  providers: [FeeTypeService],
  declarations: [FeeTypeComponent]
})
export class FeeTypeModule { }
