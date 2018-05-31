import { StudentService, IStudent } from '../student.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
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
        birthdate: selectedStudent.birthdate ? selectedStudent.birthdate : '',
        addressForm : this.formBuilder.group({
          region : selectedStudent.region ? selectedStudent.region : '',
          wereda: selectedStudent.wereda ? selectedStudent.wereda : '',
          kebele: selectedStudent.kebele ? selectedStudent.kebele : '',
          houseNo: selectedStudent.house_no ? selectedStudent.house_no : '',
          mobile: selectedStudent.mobile ? selectedStudent.mobile : '',
          phone: selectedStudent.phone ? selectedStudent.phone : '',
          postCode: selectedStudent.post_code ? selectedStudent.post_code : '',
          status: selectedStudent.status ? selectedStudent.status : '',
          type: selectedStudent.type ? selectedStudent.type : ''
        })
      });
   }

  ngOnInit() {
    this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.studentService.getStudents(this.id).subscribe((student: any) => this.generateForm(student.result));
  }
  prepareData(): IStudent {
    const formModel = this.studentForm.value;
    const studentData = {
      select: false,
      id_no: this.id,
      id: this.id ? this.id : 0,
      full_name: formModel.full_name ? formModel.full_name : '' ,
      gender: formModel.gender ? formModel.gender : '',
      birthdate: formModel.birthdate,
      blood_group: formModel.blood_group,
      hasAddress: false,
      address: {

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

  handelResponse(response: any) {
    if (response.success) {
      this.location.back();
    } else {
      this.error = response;
    }
  }

}
