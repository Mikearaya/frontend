import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IEmployee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = 'Employee';
  employeeForm: FormGroup;
  employee: IEmployee;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string | number;
  Blood_Group = ['A+', 'A-', 'B-', 'B+', 'AB+', 'AB-', 'O+', 'O-' ];

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService, ) {
                this.generateForm();
               }

              generateForm(activeEmployee: any = '') {
                this.id_no = activeEmployee.id_no;
                console.log(activeEmployee);
                 this.employeeForm = this.fb.group({
                    Employee_Id: activeEmployee.Employee_Id ? [activeEmployee.Employee_Id, Validators.required] :
                                                              ['', Validators.required],
                    Full_Name: activeEmployee.Full_Name ? [activeEmployee.Full_Name, Validators.required] :
                                                          ['', Validators.required],
                    Gender: activeEmployee.Gender ? [activeEmployee.Gender, Validators.required] :
                                                          ['', Validators.required],
                    Birth_Date: activeEmployee.Birth_Date ? [activeEmployee.Birth_Date, Validators.required] :
                                                            ['', Validators.required],
                    Address_Code: activeEmployee.Address_Code ? [activeEmployee.Address_Code, Validators.required] :
                                                                ['', Validators.required],
                    Employment_Date: activeEmployee.Employment_Date ? [activeEmployee.Employment_Date, Validators.required] :
                                                                      ['', Validators.required],
                    Blood_Group: activeEmployee.Blood_Group ? activeEmployee.Blood_Group : '',

                 });
                }

  // form model
  ngOnInit(): void {
    this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.employeeService.getData(this.id).subscribe((employee: any) => this.generateForm(employee)); }

  prepareData(): any {

  const formModel = this.employeeForm.value;
    console.log('employee form' );
    console.log(formModel);
    const employeeData = {
      id: this.id ? this.id : 0,
      Employee_Id: formModel.Employee_Id,
      Full_Name: formModel.Full_Name ? formModel.Full_Name : '' ,
      Gender: formModel.Gender ? formModel.Gender : '',
      Birth_Date: formModel.Birth_Date,
      Address_Code: formModel.Address_Code,
      Employment_Date: formModel.Employment_Date,
      Blood_Group: formModel.Blood_Group,

    };
    return employeeData;
  }

  onSubmit() {
    console.log('hola');
    this.employee = this.prepareData();

    if (!this.isUpdate) {

    this.employeeService.postData(this.employee)
        .subscribe((response: any) =>
    this.handelResponse(response));
    } else {

      this.employeeService.updateData(this.employee, this.id)
          .subscribe((response: any) =>
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
