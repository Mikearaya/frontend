import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GuardianService, IGuardian } from '../guardian.service';


@Component({
  selector: 'app-guardian-form',
  templateUrl: './guardian-form.component.html',
  styleUrls: ['./guardian-form.component.css']
})


export class GuardianFormComponent implements OnInit {
  error: any;
  location: any;
  form: FormGroup;
  guardian: IGuardian;
  RELATIONS = ['Father', 'Mother'];
  id: number;

  @Input() studentId;
  constructor(  private formBuilder: FormBuilder,
               private guardianService: GuardianService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      const param = this.activatedRoute.snapshot.paramMap.get('id');
      if (param) {
        this.studentId = + param;
       }
       if ( this.studentId) {
      this.guardianService.getGardian(this.studentId).subscribe((guard: any ) => this.generateForm(guard.result));
       }

       this.generateForm();
  }
  generateForm(currentGuardian: any = '') {
this.id = currentGuardian.id;
    this.form = this.formBuilder.group({
      fullName: this.buildControl(currentGuardian.full_name, true),
      relation: this.buildControl(currentGuardian.relation, true),
      phoneNumber: this.buildControl(currentGuardian.phone, true),
      gender: this.buildControl(currentGuardian.gender, true),
      region: this.buildControl(currentGuardian.region, true),
      city: this.buildControl(currentGuardian.city, true),
      subCity: this.buildControl(currentGuardian.sub_city, true),
      wereda: this.buildControl(currentGuardian.wereda, true),
      houseNo: this.buildControl(currentGuardian.house_no, true)

    });

  }

 prepareData(): any {

   const formModel = this.form.value;
   const guardianData = {
     id_no: this.id ? this.id : 0,
     studentId: this.studentId,
     fullName: formModel.fullName ? formModel.fullName : '' ,
     gender: formModel.gender ? formModel.gender : '',
       region: formModel.region,
       wereda: formModel.wereda,
       houseNo: formModel.houseNo,
       city: formModel.city,
       subCity: formModel.subCity,
       phoneNumber: formModel.phoneNumber,
       relation: formModel.relation,

   };
   return guardianData;
 }
    onSubmit() {
      this.guardian = this.prepareData();
   if (!this.id) {
       this.saveGuardian();
   } else {
      this.updateGuardian();
   }


 }

      saveGuardian() {
        console.log('guardian insert');
        this.guardianService.addGuardian(this.guardian).subscribe((response: any) => this.handelResponse(response));
      }
      updateGuardian() {
        console.log('guardian update');
        this.guardianService.updateGuardian(this.guardian, this.id).subscribe((response: any) => this.handelResponse(response));
      }

    buildControl(value: any = '', required: Boolean = false) {
      return (required) ? [value, Validators.required ] : value;

      }

  handelResponse(response: any) {
    if (response.success) {
 //    this.location.back();
    } else {
      this.error = response;
    }
  }

}
