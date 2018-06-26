import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IFeeRate } from '../fee-rate.model';
import { FeeRateService } from '../fee-rate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fee-rate',
  templateUrl: './fee-rate.component.html',
  styleUrls: ['./fee-rate.component.css']
})
export class FeeRateComponent implements OnInit {
  title = 'Fee Rate';
  feeRateForm: FormGroup;
  feerate: IFeeRate;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string | number;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private feerateService: FeeRateService ) {
      this.generateForm();
     }
     generateForm(activeFeeRate: any = '') {
      this.id_no = activeFeeRate.id_no;
        console.log(activeFeeRate);
          this.feeRateForm = this.fb.group({
            Fee_Type: activeFeeRate.Fee_Type ? [activeFeeRate.Fee_Type, Validators.required] :
                                                           ['', Validators.required],
            Rate: activeFeeRate.Rate ? [activeFeeRate.Rate, Validators.required] :
                                                       ['', Validators.required],
            Course_Code: activeFeeRate.Course_Code ? [activeFeeRate.Course_Code, Validators.required] :
                                                       ['', Validators.required],
            });
             }

ngOnInit(): void {
 this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
 this.isUpdate = (this.id) ? true : false;
 this.feerateService.getData(this.id)
     .subscribe((feerate: any) => this.generateForm(feerate));
}

prepareData(): any {

  const formModel = this.feeRateForm.value;
    console.log('fee rate form' );
    console.log(formModel);
    const feeRateData = {
      id: this.id ? this.id : 0,
      Fee_Type: formModel.Fee_Type ? formModel.Fee_Type : '',
      Rate: formModel.Rate ? formModel.Rate : '',
      Course_Code: formModel.Course_Code ? formModel.Course_Code : ''
    };
    return feeRateData;
  }

onSubmit() {
  this.feerate = this.prepareData();
      if (!this.isUpdate) {
    this.feerateService.postData (
    this.feerate
  ).subscribe((response: any) =>
  this.handelResponse(response));
  } else {
    this.feerateService.updateData (
    this.feerate,
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
