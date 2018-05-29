import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GridsComponent } from './pages/grids/grids.component';
import { OtherComponent } from './pages/other/other.component';
import { SortComponent } from './component/sort/sort.component';
import { DataComponent } from './pages/data/data.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';


const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full'},
    { path: 'data/:id', component: DataComponent, data : {title : 'List'}},
    { path: 'manage/students', component: StudentFormComponent, data : {title: 'Add New Student'}},
    { path: 'manage/students/:id', component: StudentFormComponent, data: { title : 'Update Student'}},
    { path: 'home', component: HomeComponent, data: {title : 'Home'}},
    { path: 'other', component: OtherComponent},
    { path: 'http', component: SortComponent},
    { path: 'grid', component: GridsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
