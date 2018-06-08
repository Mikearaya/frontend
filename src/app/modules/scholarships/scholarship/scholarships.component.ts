import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { IScholarships } from '../scholarships.model';
import { ScholarshipsService } from '../scholarships.service';
// import { ToastrService } from 'ngx-toastr'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.css']
})
export class ScholarshipsComponent implements OnInit {
  title = 'Scholarship';
  scholarshipForm: FormGroup;
  scholarships: IScholarships;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;

  constructor( private fb: FormBuilder,
               private scholarshipservice: ScholarshipsService,
               private activatedRoute: ActivatedRoute,
               private router: Router, ) {
                 this.generateForm();
               }


  generateForm(activeScholarship: any = '') {
    this.id = activeScholarship.id;
    this.scholarshipForm = this.fb.group({
      Scholarship_type: activeScholarship.Scholarship_type ? [activeScholarship.Scholarship_type, Validators.required] :
                                                             ['', Validators.required],
      Application_Code: activeScholarship.Application_Code ? [activeScholarship.Application_Code, Validators.required] :
                                                             ['', Validators.required],
      Date: activeScholarship.Date ? [activeScholarship.Date, Validators.required] :
                                     ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  prepareData(): any {

    const formModel = this.scholarshipForm.value;
    console.log('scholarship form');
    console.log(formModel);
    const TypeData = {
      id: this.id ? this.id : 0,
      Scholarship_type: formModel.Scholarship_type ? formModel.Application_Code : '',
      Application_Code: formModel.Application_Code ? formModel.Application_Code : '',
      Date: formModel.Date ? formModel.Date : '',
    };
    return TypeData;

  }
      onSubmit() {
        this.scholarships = this.prepareData();

        if (!this.isUpdate) {

          this.scholarshipservice.PostScholarship(this.scholarships)
              .subscribe((response: any) => this.HandelResponse(response));
        } else {

          this.scholarshipservice.UpdateScholarship(this.scholarships, this.id)
              .subscribe((response: any) => this.HandelResponse(response));
        }
      }
  HandelResponse(response: any) {
    if (response.success) {
      console.log('submited');
    } else {
      this.error = response;
    }
  }

}
