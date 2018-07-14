import { FooterModule } from './components/footer/footer.module';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIcon, MatIconModule, MatToolbarModule,
          MatSidenav, MatSidenavModule, MatProgressSpinnerModule, MatGridList,
          MatNativeDateModule, MatListModule, MatTableModule, MatCheckboxModule,
          MatPaginator, MatPaginatorModule, MatSortModule, MatCardModule, MatGridTile,
          MatButtonModule,
          MatSelectModule
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
import { EmployeeModule } from './modules/employee/employee.module';
import { ScholarshipsModule } from './modules/scholarships/scholarships.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
// import { TableModule } from './components/table/table/table.module';
import { EventsModule } from './modules/events/events.module';
import { FeeTypeModule } from './modules/fee-type/fee-type.module';
import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/session/login/login.module';
import { FeeRateModule } from './modules/fee-rate/fee-rate.module';
import { DataTableService } from './components/table/data-table.service';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({

  imports: [
             BrowserModule, BrowserAnimationsModule,
             MatInputModule, MatFormFieldModule,
             FormsModule, MatIconModule, MatToolbarModule,
             MatSidenavModule, MatProgressSpinnerModule, MatListModule,
             MatButtonModule, HttpClientModule, MatTableModule,
             ReactiveFormsModule, StudentModule, MatCheckboxModule,
             MatPaginatorModule, MatSortModule, MatCardModule,
             CourseModule, SubjectModule, ScholarshipCoverageModule, ScholarshipTypeModule, EmployeeModule,
             FeeTypeModule, ScholarshipsModule, EnrollmentModule, EventsModule,  UserModule,
             LoginModule, FeeRateModule, AppRoutingModule, MatSelectModule, SidebarModule, NavbarModule, FooterModule
           ],
  declarations: [
            AppComponent, MenusComponent,
            TableComponent, HomeComponent, MatGridList,
            DataComponent, TitleCasePipe, MatGridTile,
          ],
  providers: [GridServices, DataTableService],

  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
