import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule,
         MatButtonModule, MatInput, MatCardModule, MatInputModule
        } from '@angular/material';
import { SubjectService } from './subject.service';

@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [SubjectFormComponent],
  providers: [SubjectService]
})
export class SubjectModule { }
