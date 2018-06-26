import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login.component';
import { LoginService } from './../services/login.service';
import { LoginRoutingModule } from './../login-routing.module';
import { AuthGuard } from '../guards/auth.guard';
import { AuthenticationService } from '../services/authentication.service';
import { JwtInterceptor } from '../helpers/jwt.interceptor';

@NgModule({
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule , MatInputModule, MatFormFieldModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatRadioModule,
    MatIconModule, MatCardModule, MatButtonModule, LoginRoutingModule
  ],
  declarations: [ LoginComponent],
  providers: [AuthGuard,
              AuthenticationService,
              LoginService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: JwtInterceptor,
                multi: true
              },
          ]
})
export class LoginModule { }
