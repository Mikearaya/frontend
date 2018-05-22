import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Student} from '../../models/student';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  student: Student;
  bloodTypes = ['A+', 'A-', 'B-', 'B+', 'AB+', 'AB-', 'O+', 'O-' ];
  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService) {
    this.generateForm();
   }

   generateForm() {
      this.studentForm = this.formBuilder.group({
        full_name: ['', Validators.required ],
        gender: ['', Validators.required],
        blood_group: '',
        birthdate: ''
      });
   }

  ngOnInit() {
  }
  prepareData(): Student {
    const formModel = this.studentForm.value;
    const studentData = {
      select: true,
      id_no: formModel.id_no,
      full_name: formModel.full_name,
      gender: formModel.gender,
      birthdate: formModel.birthdate,
      blood_group: formModel.blood_group
    };
    return studentData;
  }
  onSubmit() {
    this.student = this.prepareData();
    this.studentService.addStudent(this.student).subscribe(
      (test: Student) => console.log(test)
    );

  }

}
