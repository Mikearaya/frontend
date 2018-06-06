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


@NgModule({

  imports: [
             BrowserModule, BrowserAnimationsModule,
             MatInputModule, MatFormFieldModule,
              FormsModule, MatIconModule, MatToolbarModule,
              MatSidenavModule, MatProgressSpinnerModule, MatListModule,
             MatButtonModule, HttpClientModule, MatTableModule,
             ReactiveFormsModule, StudentModule, MatCheckboxModule,
             MatPaginatorModule, MatSortModule, MatCardModule,
             CourseModule, SubjectModule, AppRoutingModule
           ],
  declarations: [
            AppComponent, MenusComponent,
            TableComponent, HomeComponent,
            DataComponent, TitleCasePipe
          ],
  providers: [GridServices],

  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
