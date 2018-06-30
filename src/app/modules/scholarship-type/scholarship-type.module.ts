import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ScholarshipTypeComponent} from '../scholarship-type/scholarship-typ/scholarship-type.component';
import { ScholarshipTypeService} from './scholarship-type.service';
import { ScholarshipTypeRoutingModule} from './scholarship-type-routing.module';
import { ScholarshipCoverageModule } from './../scholarship-coverage/scholarship-coverage.module';
import { MatInputModule, MatIconModule, MatToolbarModule,
        MatProgressSpinnerModule,
        MatNativeDateModule, MatListModule, MatTableModule, MatCheckboxModule,
        MatPaginatorModule, MatSortModule, MatCardModule,
        MatButtonModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { TableService } from './table.service';

@NgModule({
  imports: [  BrowserModule, BrowserAnimationsModule , MatInputModule, MatFormFieldModule,
              MatIconModule, MatToolbarModule,
              MatProgressSpinnerModule, HttpModule,
              MatNativeDateModule, MatListModule, MatTableModule, MatCheckboxModule,
              MatPaginatorModule, MatSortModule, MatCardModule,
              MatButtonModule, FormsModule, HttpClientModule, ReactiveFormsModule, ScholarshipTypeRoutingModule,
              MatInputModule, MatFormFieldModule, MatListModule, ScholarshipCoverageModule,
              MatCheckboxModule, MatCardModule, MatButtonModule, CommonModule, CdkTableModule
  ],
  declarations: [ScholarshipTypeComponent],
  providers: [ScholarshipTypeService, TableService],
  exports: []
})
export class ScholarshipTypeModule { }
