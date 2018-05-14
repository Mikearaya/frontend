import { StudentService } from './../../services/student.service';
import { Student } from './../../template-classes/student';
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

  items: Student[];

  displayedColumns: any[] = ['id_no', 'full_name', 'gender', 'birthdate', 'blood_group'];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  addnew() {
    console.log('Hello there');
  }

  delete(selectedItem: any[]) {
    console.log(selectedItem);
  }

}



