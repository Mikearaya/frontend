import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectFormComponent } from './subject-form/subject-form.component';

@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  declarations: [SubjectFormComponent]
})
export class SubjectModule { }
