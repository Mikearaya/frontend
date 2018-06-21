import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { UserRoutingModule } from '../user/user-routing.module';
import { UserComponent} from './user/user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule , MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatRadioModule,
    MatIconModule, MatCardModule, MatButtonModule, UserRoutingModule
  ],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
