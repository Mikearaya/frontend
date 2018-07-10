import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  Amount_Type = ['full', 'partial'];
  Fee_Type = ['Registration', 'Transportation', 'Book', 'Tution'];
    constructor(private fb: FormBuilder,
                private scholarshipcoverageservice: ScholarshipCoverageService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
                  this.generateForm();
                 }

  generateForm(activeCoverage: any = '') {
    this.id = activeCoverage.id;
    this.scholarshipcoverageForm = this.fb.group({
      scholarship: activeCoverage.scholarship ? [activeCoverage.scholarship, Validators.required] :
                                                          ['', Validators.required],
      fee_type: activeCoverage.fee_type ? [activeCoverage.fee_type, Validators.required] :
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
    this.scholarshipcoverageservice.getData(this.id).subscribe((scholarshipcoverage: any) =>
    this.generateForm(scholarshipcoverage.result));
  }

  prepareData(): any {

    const formModel = this.scholarshipcoverageForm.value;
    console.log('scholarship coverage form');
    console.log(formModel);
    const CoverageData = {
      id: this.id ? this.id : 0,
      scholarship: formModel.scholarship_code ? formModel.scholarship_code : '',
      fee_type: formModel.fee_type_code ? formModel.fee_type_code : '',
      amount: formModel.amount ? formModel.amount : '',
      amount_type: formModel.amount_type ? formModel.amount_type : '',

    };
    return CoverageData;
  }


  onSubmit() {
    this.scholarshipcoverage = this.prepareData();

    if (!this.isUpdate) {

      this.scholarshipcoverageservice.postData(this.scholarshipcoverage)
          .subscribe((response: any) => this.HandelResponse(response));
    } else {

      this.scholarshipcoverageservice.updateData(this.scholarshipcoverage, this.id)
          .subscribe((response: any) => this.HandelResponse(response));
    }
  }
  onCancel() {
    this.router.navigate([`/manage/${'scholarship_type'}`]);
  }

  HandelResponse(response: any) {
    if (response.success) {
      console.log('submited');
    } else {
      this.error = response;
    }
  }


}
