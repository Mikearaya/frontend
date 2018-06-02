import { StudentService, IStudent } from '../student.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;

  student: IStudent;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string;
  RELATIONSHIPS = ['Mother', 'Father'];
  bloodTypes = ['A+', 'A-', 'B-', 'B+', 'AB+', 'AB-', 'O+', 'O-' ];
  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
            private location: Location) {
    this.generateForm();
   }

        ngOnInit() {
          this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
          this.isUpdate = (this.id) ? true : false;
          this.studentService.getStudents(this.id).subscribe((student: any) => this.generateForm(student.result));
        }

   generateForm(selectedStudent: any = '') {
     this.id_no = selectedStudent.id_no;
     const student = {...selectedStudent.result};
     console.log(student);

      this.studentForm = this.formBuilder.group({
        full_name: this.buildControl(student.full_name, true),
        gender: this.buildControl(student.gender , true),
        blood_group: this.buildControl(student.blood_group),
        birthdate: this.buildControl(student.birthdate, true),
        addressForm : this.formBuilder.group({
          region : this.buildControl(student.region, true),
          wereda: this.buildControl(student.wereda, true ),
          city: this.buildControl(student.city, true ),
          subCity: this.buildControl(student.sub_city, true ),
          houseNo: this.buildControl(student.house_no, true),
          mobile: this.buildControl(student.mobile, true),
          phone: this.buildControl(student.phone, true),
          postCode: this.buildControl(student.post_code),
        })
      });

   }

  prepareData(): any {

    const formModel = this.studentForm.value;
    const studentData = {
      id_no: this.id,
      id: this.id ? this.id : 0,
      full_name: formModel.full_name ? formModel.full_name : '' ,
      gender: formModel.gender ? formModel.gender : '',
      birthdate: formModel.birthdate,
      blood_group: formModel.blood_group,
      hasAddress: false,
      address: {
        region: formModel.addressForm.region,
        wereda: formModel.addressForm.wereda,
        houseNo: formModel.addressForm.houseNo,
        city: formModel.addressForm.city,
        subCity: formModel.addressForm.subCity,
        mobile: formModel.addressForm.mobile,
        phone: formModel.addressForm.phone,
        postCode: formModel.addressForm.postCode,
      }
    };
    return studentData;
  }
  onSubmit() {
    this.student = this.prepareData();

    if (!this.isUpdate) {
        this.studentService.addStudent(this.student).subscribe((response: any) => this.handelResponse(response));
    } else {
        this.studentService.updateStudent(this.student, this.id).subscribe((response: any) => this.handelResponse(response));
    }
  }

  buildControl(value: any = '', required: Boolean = false) {
    return (required) ? [value, Validators.required ] : value;

    }

  handelResponse(response: any) {
    if (response.success) {
      this.location.back();
    } else {
      this.error = response;
    }
  }

}
