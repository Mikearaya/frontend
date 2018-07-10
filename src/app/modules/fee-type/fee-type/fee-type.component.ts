import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IFeeType } from '../fee-type.model';
import { FeeTypeService } from '../fee-type.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fee-type',
  templateUrl: './fee-type.component.html',
  styleUrls: ['./fee-type.component.css']
})
export class FeeTypeComponent implements OnInit {
 title = 'Fee Type';
  feeTypeForm: FormGroup;
  feetype: IFeeType;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string | number;
  Term = ['one time', 'mothly', 'yearly'];

  constructor( private fb: FormBuilder,
               private activatedRoute: ActivatedRoute,
               private feetypeService: FeeTypeService ) {
                 this.generateForm();
               }
  generateForm(activeFeeType: any = '') {
         this.id_no = activeFeeType.id_no;
           console.log(activeFeeType);
             this.feeTypeForm = this.fb.group({
               Fee: activeFeeType.Fee ? [activeFeeType.Fee, Validators.required] :
                                                              ['', Validators.required],
               Term: activeFeeType.Term ? [activeFeeType.Term, Validators.required] :
                                                          ['', Validators.required],
               Duration: activeFeeType.Duration ? [activeFeeType.Duration, Validators.required] :
                                                          ['', Validators.required],
               Min_duration: activeFeeType.Min_duration ? [activeFeeType.Min_duration, Validators.required] :
                                                            ['', Validators.required]
                 });
                }

  ngOnInit(): void {
    this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.feetypeService.getData(this.id)
        .subscribe((feetype: any) => this.generateForm(feetype));
  }
prepareData(): any {

    const formModel = this.feeTypeForm.value;
      console.log('event form' );
      console.log(formModel);
      const feeTypeData = {
        id: this.id ? this.id : 0,
        Fee: formModel.Fee ? formModel.Fee : '',
        Term: formModel.Term ? formModel.Term : '' ,
        Duration: formModel.Duration ? formModel.Duration : '',
        Min_duration: formModel.Min_duration ? formModel.Min_duration : ''
      };
      return feeTypeData;
    }

    onSubmit() {
      this.feetype = this.prepareData();
          if (!this.isUpdate) {
        this.feetypeService.postData (
        this.feetype
      ).subscribe((response: any) =>
      this.handelResponse(response));
      } else {
        this.feetypeService.updateData (
        this.feetype,
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
