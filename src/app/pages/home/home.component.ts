import { MainService } from './../../main.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addnew() {
  }

  delete(selectedItem: any[]) {
  }

}



