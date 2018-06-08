import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIcon, MatIconModule, MatToolbarModule,
          MatSidenav, MatSidenavModule, MatProgressSpinnerModule,
          MatNativeDateModule, MatListModule, MatTableModule, MatCheckboxModule,
          MatPaginator, MatPaginatorModule, MatSortModule, MatCardModule,
          MatButtonModule
        } from '@angular/material';

import {AppComponent} from './app.component';

import { MenusComponent} from './components/menus/menus.component';
import { TableComponent } from './components/table/table.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { GridServices } from './services/grid.services';
import { TitleCasePipe } from './pipes/title-case.pipe';

import { StudentModule } from './modules/student/student.module';
import { CourseModule } from './modules/course/course.module';

import { SubjectModule } from './modules/subject/subject.module';
import { ScholarshipCoverageModule } from './modules/scholarship-coverage/scholarship-coverage.module';
import { ScholarshipTypeModule } from './modules/scholarship-type/scholarship-type.module';
<<<<<<< HEAD
import { EmployeeModule } from './modules/employee/employee.module';
import { ScholarshipsModule } from './modules/scholarships/scholarships.module';


=======
import { ScholarshipCoverageModule } from './modules/scholarship-coverage/scholarship-coverage.module';
>>>>>>> ephrem
@NgModule({

  imports: [
<<<<<<< HEAD
             BrowserModule, BrowserAnimationsModule,
             MatInputModule, MatFormFieldModule,
             FormsModule, MatIconModule, MatToolbarModule,
             MatSidenavModule, MatProgressSpinnerModule, MatListModule,
             MatButtonModule, HttpClientModule, MatTableModule,
             ReactiveFormsModule, StudentModule, MatCheckboxModule,
             MatPaginatorModule, MatSortModule, MatCardModule,
             CourseModule, SubjectModule, ScholarshipCoverageModule, ScholarshipTypeModule, EmployeeModule, ScholarshipsModule,
              AppRoutingModule
           ],
  declarations: [
            AppComponent, MenusComponent,
            TableComponent, HomeComponent,
            DataComponent, TitleCasePipe
          ],
  providers: [GridServices],

=======
    BrowserModule, BrowserAnimationsModule, CoreModule , MatInputModule, MatFormFieldModule,
    SharedModule, HttpModule, FormsModule, MatButtonModule, HttpClientModule, ScholarshipsModule,
    StudentModule, CourseModule, AppRoutingModule, ReactiveFormsModule, EmployeeModule, ScholarshipTypeModule, ScholarshipCoverageModule
  ],
  providers: [ItemsServices, GridServices, MainService],
>>>>>>> ephrem
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
