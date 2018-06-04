import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardianRoutingModule } from './guardian-routing.module';
import { GuardianService } from './guardian.service';
import { GuardianFormComponent } from './guardian-form/guardian-form.component';
import { MatFormFieldModule,  MatInputModule, MatSelectModule, MatRadioModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GuardianRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [GuardianFormComponent],
  providers: [GuardianService],
  exports: [GuardianFormComponent]
})
export class GuardianModule { }
