import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Student} from '../../models/student';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  student: Student;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string;
  bloodTypes = ['A+', 'A-', 'B-', 'B+', 'AB+', 'AB-', 'O+', 'O-' ];
  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService,
              private activatedRoute: ActivatedRoute) {
    this.generateForm();
   }

   generateForm(selectedStudent: any = '') {
     this.id_no = selectedStudent.id_no;
      this.studentForm = this.formBuilder.group({
        full_name: selectedStudent.full_name ?
                                              [selectedStudent.full_name, Validators.required] :
                                              ['', Validators.required],
        gender: selectedStudent.gender ?
        [selectedStudent.gender, Validators.required] :
        ['', Validators.required],
        blood_group: selectedStudent.blood_group ? selectedStudent.blood_group : '',
        birthdate: selectedStudent.birthdate ? selectedStudent.birthdate : ''
      });
   }

  ngOnInit() {
    this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.studentService.getStudents(this.id).subscribe((student: any) => this.generateForm(student.result));
    this.isUpdate =  (this.id) ? true : false;

  }
  prepareData(): Student {
    const formModel = this.studentForm.value;
    console.log(formModel);
    const studentData = {
      select: false,
      id_no: this.id,
      id: this.id ? this.id : 0,
      full_name: formModel.full_name ? formModel.full_name : '' ,
      gender: formModel.gender ? formModel.gender : '',
      birthdate: formModel.birthdate,
      blood_group: formModel.blood_group
    };
    return studentData;
  }
  onSubmit() {
    this.student = this.prepareData();

    if (!this.isUpdate) {

    this.studentService.addStudent(this.student).subscribe(
      (test: any) => {
              if (test.success) {
                alert('success');
              } else {
                this.error = test;
              }
      }
    );
    } else {
      this.studentService.updateStudent(this.student, this.id).subscribe(
        (test: any) => {
                if (test.success) {
                  alert('success');
                } else {
                  this.error = test;
                }
        }
      );
    }
  }

}
