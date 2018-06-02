import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatStepperModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { StudentFormComponent } from './students-form/student-form.component';
import { StudentService } from './student.service';
import { StudentRoutingModule } from './student-routing.module';
import { StudentGuardianComponent } from './student-guardian/student-guardian.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    StudentRoutingModule,
    MatStepperModule
  ],
  declarations: [
    StudentFormComponent,
    StudentGuardianComponent
  ],
  providers : [StudentService]
})
export class StudentModule { }
