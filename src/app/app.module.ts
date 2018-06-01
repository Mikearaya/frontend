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
import {ItemsServices} from './services/items.services';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidenavComponent} from './component/sidenav/sidenav.component';
import {MenudemoComponent} from './component/menudemo/menudemo.component';
import {CarddemoComponent} from './component/carddemo/carddemo.component';
import {TabdemoComponent} from './component/tabdemo/tabdemo.component';
import {FromdemoComponent} from './component/fromdemo/fromdemo.component';
import {MenusComponent} from './component/menus/menus.component';
import {FormsComponent} from './component/forms/forms.component';
import { LayoutComponent } from './layout/layout.component';
import { GridComponent } from './component/grid/grid.component';
import { TableComponent } from './component/table/table.component';
import { SortComponent } from './component/sort/sort.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { OtherComponent } from './pages/other/other.component';
import { GridsComponent } from './pages/grids/grids.component';
import { DataComponent } from './pages/data/data.component';
import { GridServices } from './services/grid.services';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { StudentModule } from './modules/student/student.module';
import { CourseModule } from './modules/course/course.module';
@NgModule({
  declarations: [
    AppComponent, SidenavComponent, MenudemoComponent, CarddemoComponent, TabdemoComponent,
    FromdemoComponent, MenusComponent, FormsComponent,
    LayoutComponent, GridComponent, TableComponent, SortComponent,
    HomeComponent, GridsComponent, OtherComponent, DataComponent, TitleCasePipe
],
  imports: [
    BrowserModule, BrowserAnimationsModule, CoreModule , MatInputModule, MatFormFieldModule,
    SharedModule, HttpModule, FormsModule, MatButtonModule, HttpClientModule,
    StudentModule, CourseModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [ItemsServices, GridServices, MainService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
