import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IEnrollment } from '../enrollment.model';
import { EnrollmentService } from '../enrollment.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  title = 'Enrollment';
  enrollmentForm: FormGroup;
  enrollment: IEnrollment;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string | number;
  Term = ['first', 'second'];

  constructor( private fb: FormBuilder,
               private activatedRoute: ActivatedRoute,
               private enrollmentService: EnrollmentService, ) {
                 this.generateForm();
               }

  generateForm(activeEnrollment: any = '') {
         this.id_no = activeEnrollment.id_no;
           console.log(activeEnrollment);
             this.enrollmentForm = this.fb.group({
               Student_Id: activeEnrollment.Student_Id ? [activeEnrollment.Student_Id, Validators.required] :
                                                              ['', Validators.required],
               Date: activeEnrollment.Date ? [activeEnrollment.Date, Validators.required] :
                                                          ['', Validators.required],
               Term: activeEnrollment.Term ? [activeEnrollment.Term, Validators.required] :
                                                          ['', Validators.required],
               Year: activeEnrollment.Year ? [activeEnrollment.Year, Validators.required] :
                                                            ['', Validators.required],
               Course_Code: activeEnrollment.Course_Code ? [activeEnrollment.Course_Code, Validators.required] :
                                                           ['', Validators.required]
                 });
                }


  ngOnInit(): void {
    this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.enrollmentService.getData(this.id)
        .subscribe((enrollment: any) => this.generateForm(enrollment));
  }

  prepareData(): any {

    const formModel = this.enrollmentForm.value;
      console.log('enrollment form' );
      console.log(formModel);
      const enrollmentData = {
        id: this.id ? this.id : 0,
        Student_Id: formModel.Student_Id,
        Date: formModel.Date ? formModel.Date : '' ,
        Term: formModel.Term ? formModel.Term : '',
        Year: formModel.Year ? formModel.Year : '',
        Course_Code: formModel.Course_Code ? formModel.Course_Code : ''
      };
      return enrollmentData;
    }

    onSubmit() {
      this.enrollment = this.prepareData();
          if (!this.isUpdate) {
        this.enrollmentService.postData (
        this.enrollment
      ).subscribe((response: any) =>
        this.handelResponse(response));
      } else {
        this.enrollmentService.updateData (
        this.enrollment,
        this.id
      ).subscribe((response: any) =>
        this.handelResponse(response));
      }
    }

    handelResponse(response: any) {
      if (response.success) {
        console.log('submited');
      } else {
        this.error = response;
      }
    }
}
