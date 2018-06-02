import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MainService } from './main.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenusComponent} from './component/menus/menus.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';
import { StudentModule } from './modules/student/student.module';
import { CourseModule } from './modules/course/course.module';
import { ItemsServices } from './services/items.services';
@NgModule({
  declarations: [
    AppComponent, MenusComponent,  LayoutComponent, TableComponent,
    HomeComponent, DataComponent
],
  imports: [
    BrowserModule, BrowserAnimationsModule, CoreModule , MatInputModule, MatFormFieldModule,
    SharedModule, HttpModule, FormsModule, MatButtonModule, HttpClientModule,
    StudentModule, CourseModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [MainService, ItemsServices],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
