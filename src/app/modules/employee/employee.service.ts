import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from '../employee/employee.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { CrudService } from './../../services/crud.service';


@Injectable()
    export class EmployeeService extends CrudService {
  data: URLSearchParams;
  protected Url = 'http://localhost/smart_school/index.php/api/employee/';



  setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
      dataModel.set('Employee_id', formModel.Employee_id);
      dataModel.set('Full_Name', formModel.Full_Name);
      dataModel.set('Birth_Date', formModel.Bith_Date);
      dataModel.set('Gender', formModel.Gender);
      dataModel.set('Address_Code', formModel.Address_Code);
      dataModel.set('Employment_Date', formModel.Employment_Date);
      dataModel.set('Blood_Group', formModel.Blood_Group);

   return dataModel;

}

}

