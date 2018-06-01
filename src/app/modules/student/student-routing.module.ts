import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentFormComponent} from './students-form/student-form.component';


const routes: Routes = [
  { path: 'manage/students/:id' , component: StudentFormComponent },
  { path: 'manage/students' , component: StudentFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
