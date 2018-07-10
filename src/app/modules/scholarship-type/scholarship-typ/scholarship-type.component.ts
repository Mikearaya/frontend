import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, Output, Input  } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { IScholarshipType } from '../scholarship-type.model';
import { ScholarshipTypeService } from '../scholarship-type.service';
// import { ToastrService } from 'ngx-toastr'
import {Router, ActivatedRoute} from '@angular/router';
import { ScholarshipCoverageComponent } from './../../scholarship-coverage/scholarship-coverage/scholarship-coverage.component';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material';
import { IScholarshipCoverage } from './../../scholarship-coverage/scholarship-coverage.model';
import { DataSource } from '@angular/cdk/collections';
import { TableService } from './../table.service';
import {Location} from '@angular/common';
import { TableDataSource } from './../table-data-source';

@Component({
  selector: 'app-scholarship-type',
  templateUrl: './scholarship-type.component.html',
  styleUrls: ['./scholarship-type.component.css']
})
export class ScholarshipTypeComponent implements OnInit, AfterViewInit {
  title= 'Scholarship Type';
 @ViewChild(ScholarshipCoverageComponent) scholarshipcoverage;
  scholarshiptypeForm: FormGroup;
  scholarshipcoverageForm: FormGroup;
  scholarshiptype: IScholarshipType;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  dataSource: TableDataSource;
  Amount_Type = ['full', 'partial', 'initial'];
  displayedColumns = ['no', 'scholarshipCode', 'feeType', 'amount', 'amountType' ];
  constructor( private fb: FormBuilder,
               private scholarshiptypeservice: ScholarshipTypeService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private _location: Location,
               private tableservice: TableService ) {
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
        this.dataSource = new TableDataSource(this.tableservice);
        this.dataSource.loadCoverages('', '', 'asc', 0, 5);
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
  ngAfterViewInit() {
    this.scholarshipcoverageForm = this.scholarshipcoverage;
  }

  addnew() {
    this.router.navigate([`/manage/${'scholarship_coverage'}`]);
  }

  onSubmit() {
    this.router.navigate([`/manage/${'scholarship_coverage'}`]);

  }
    //  onSubmit() {
    //     this.scholarshiptype = this.prepareData();

    //     if (!this.isUpdate) {

    //       this.scholarshiptypeservice.postData(this.scholarshiptype)
    //           .subscribe((response: any) => this.HandelResponse(response));
    //     } else {

    //       this.scholarshiptypeservice.updateData(this.scholarshiptype, this.id)
    //           .subscribe((response: any) => this.HandelResponse(response));
    //     }
    //   }
  HandelResponse(response: any) {
      if (response.success) {
        console.log('submited');
      } else {
        this.error = response;
      }
    }

    // coverage table
    onRowClick(row) {
      console.log('Row clicked: ', row);
    }
    btnCancel() {
      this._location.back();
    }


  }



