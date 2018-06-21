import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {FormControl, Validator } from '@angular/forms';
import { LoginService } from './../../modules/session/services/login.service';
import { User } from './../../modules/session/user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice: LoginService) { }
  users: User[] = [];
  ngOnInit() {
    this.loginservice.getAll().pipe(first()).subscribe( users => {
      this.users = users;
    } );
  }

}



