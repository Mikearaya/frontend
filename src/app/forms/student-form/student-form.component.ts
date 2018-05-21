import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  boodTypes = ['A+', 'A-', 'B-', 'B+', 'AB+', 'AB-', 'O+', 'O-' ];
  constructor(private formBuilder: FormBuilder) {
    this.generateForm();
   }

   generateForm() {
      this.studentForm = this.formBuilder.group({
        id_no: ['', Validators.required],
        full_name: ['', Validators.required ],
        gender: ['', Validators.required],
        blood_group: '',
        birthdate: ''
      });
   }

  ngOnInit() {
  }

}
