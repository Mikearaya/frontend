import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { IScholarshipType } from '../scholarship-type.model';
import { ScholarshipTypeService } from '../scholarship-type.service';
// import { ToastrService } from 'ngx-toastr'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-scholarship-type',
  templateUrl: './scholarship-type.component.html',
  styleUrls: ['./scholarship-type.component.css']
})
export class ScholarshipTypeComponent implements OnInit {
  title= 'Scholarship Type';
  scholarshiptypeForm: FormGroup;
  scholarshiptype: IScholarshipType;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  constructor( private fb: FormBuilder,
               private scholarshiptypeservice: ScholarshipTypeService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) {
                 this.generateForm();
  }

      generateForm(activeType: any = '') {
          this.id = activeType.id;
              this.scholarshiptypeForm = this.fb.group({
          Name : activeType.Name ? [activeType.Name, Validators.required] :
                                   ['', Validators.required],
          Amount: activeType.Value ? [activeType.Amount, Validators.required] :
                                    ['', Validators.required],
          Amount_Type: activeType.Amount_Type ? [activeType.Value_Type, Validators.required] :
                                              ['', Validators.required],
              });
      }

  ngOnInit(): void {
  this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.scholarshiptypeservice.getData(this.id)
        .subscribe((scholarshiptype: any) => this.generateForm(scholarshiptype.result));

}
  prepareData(): any {

    const formModel = this.scholarshiptypeForm.value;
    console.log('scholarship type form');
    console.log(formModel);
    const TypeData = {
      id: this.id ? this.id : 0,
      Name: formModel.Name ? formModel.Name : '',
      Amount: formModel.Amount ? formModel.Amount : '',
      Amount_Type: formModel.Amount_Type ? formModel.Amount_Type : '',
    };
    return TypeData;
  }

     onSubmit() {
        this.scholarshiptype = this.prepareData();

        if (!this.isUpdate) {

          this.scholarshiptypeservice.postData(this.scholarshiptype)
              .subscribe((response: any) => this.HandelResponse(response));
        } else {

          this.scholarshiptypeservice.updateData(this.scholarshiptype, this.id)
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

