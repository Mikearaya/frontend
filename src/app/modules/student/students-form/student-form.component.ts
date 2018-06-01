import { StudentService, IStudent } from '../student.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      this.studentForm = this.formBuilder.group({
        full_name: this.buildControl(selectedStudent.full_name, true),
        gender: this.buildControl(selectedStudent.gender , true),
        blood_group: this.buildControl(selectedStudent.blood_group),
        birthdate: this.buildControl(selectedStudent.birthdate),
        addressForm : this.formBuilder.group({
          region : this.buildControl(selectedStudent.region),
          wereda: this.buildControl(selectedStudent.wereda),
          kebele: this.buildControl(selectedStudent.kebele),
          houseNo: this.buildControl(selectedStudent.house_no),
          mobile: this.buildControl(selectedStudent.mobile),
          phone: this.buildControl(selectedStudent.phone),
          postCode: this.buildControl(selectedStudent.post_code),
          status: this.buildControl(selectedStudent.status),
          type: this.buildControl(selectedStudent.type),
        }),
        guardianForm: this.formBuilder.group({
          fullName: this.buildControl(selectedStudent.guardian.full_name),
          wereda: this.buildControl(selectedStudent.guardian.wereda),
          houseNo: this.buildControl(selectedStudent.guardian.house_no),
          phoneNumber: this.buildControl(selectedStudent.guardian.phone),
          relation: this.buildControl(selectedStudent.guardian.relation),
          gender: this.buildControl(selectedStudent.guardian.gender),
          city: this.buildControl(selectedStudent.guardian.city),
          subCity: this.buildControl(selectedStudent.guardian.sub_city),
          birthDate: this.buildControl(selectedStudent.guardian.date_of_birth)
        })
      });
   }

  prepareData(): any {

    const formModel = this.studentForm.value;
    console.log('student form' );
    console.log(formModel);
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
        kebele: formModel.addressForm.kebele,
        house_no: formModel.addressForm.houseNo,
        mobile: formModel.addressForm.mobile,
        phone: formModel.addressForm.phone,
        postCode: formModel.addressForm.postCode,
        status: formModel.addressForm.status,
        type: formModel.addressForm.type
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

  buildControl(val: any = '', required: Boolean = false) {
    return (required) ? [val, Validators.required ] : '';

    }


  handelResponse(response: any) {
    if (response.success) {
      this.location.back();
    } else {
      this.error = response;
    }
  }

}
