import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Login';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        User_Name: ['', Validators.required],
        Password: ['', Validators.required]
    });
  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }

 onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.loginForm.invalid) {
         return;
     }

     this.loading = true;
     this.authenticationService.login(this.f.User_Name.value, this.f.Password.value)
         .pipe(first())
         .subscribe(
             data => {
                 this.router.navigate([this.returnUrl]);
             },
             error => {
                 this.error = error;
                 this.loading = false;
             });
 }

}
