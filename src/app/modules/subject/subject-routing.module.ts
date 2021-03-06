import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectFormComponent } from './subject-form/subject-form.component';

const routes: Routes = [
  {path: 'manage/subjects', component: SubjectFormComponent, data: {title: 'Subject'} },
  {path: 'manage/subjects/:id', component: SubjectFormComponent, data: {title: 'Subject'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
