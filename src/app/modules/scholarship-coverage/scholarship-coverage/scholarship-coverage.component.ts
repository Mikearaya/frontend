import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { IScholarshipCoverage } from '../scholarship-coverage.model';
import { ScholarshipCoverageService } from '../scholarship-coverage.service';
// import { ToastrService } from 'ngx-toastr'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scholarship-coverage',
  templateUrl: './scholarship-coverage.component.html',
  styleUrls: ['./scholarship-coverage.component.css']
})
export class ScholarshipCoverageComponent implements OnInit {
  title = 'Scholarship Coverage';
  scholarshipcoverageForm: FormGroup;
  scholarshipcoverage: IScholarshipCoverage;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;

    constructor(private fb: FormBuilder,
                private scholarshipcoverageservice: ScholarshipCoverageService,
                private activatedRoute: ActivatedRoute,
                private router: Router) { }

  generateForm(activeCoverage: any = '') {
this.id = activeCoverage.id;
    this.scholarshipcoverageForm = this.fb.group({
      scholarship_code: activeCoverage.scholarship_code ? [activeCoverage.scholarship_code, Validators.required] :
                                                          ['', Validators.required],
      fee_type_code: activeCoverage.fee_type_code ? [activeCoverage.fee_type_code, Validators.required] :
                                                    ['', Validators.required],
      amount: activeCoverage.amount ? [activeCoverage.amount, Validators.required] :
                                      ['', Validators.required],
      amount_type: activeCoverage.amount_type ? [activeCoverage.amount_type, Validators.required] :
                                                ['', Validators.required],

    });
  }

  ngOnInit( ) {
  this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.scholarshipcoverageservice.GetCoverage(this.id).subscribe((scholarshipcoverage: any) =>
    this.generateForm(scholarshipcoverage.result));
  }

  prepareData(): any {

    const formModel = this.scholarshipcoverageForm.value;
    console.log('scholarship coverage form');
    console.log(formModel);
    const CoverageData = {
      id: this.id ? this.id : 0,
      scholarship_code: formModel.scholarship_code ? formModel.scholarship_code : '',
      fee_type_code: formModel.fee_type_code ? formModel.fee_type_code : '',
      amount: formModel.amount ? formModel.amount : '',
      amount_type: formModel.amount_type ? formModel.amount_type : '',

    };
    return CoverageData;
  }

  onSubmit() {
    this.scholarshipcoverage = this.prepareData();

    if (!this.isUpdate) {

      this.scholarshipcoverageservice.PostCoverage(this.scholarshipcoverage)
          .subscribe((response: any) => this.HandelResponse(response));
    } else {

      this.scholarshipcoverageservice.UpdateCoverage(this.scholarshipcoverage, this.id)
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
