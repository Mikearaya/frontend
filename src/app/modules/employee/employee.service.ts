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

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
    export class EmployeeService {
  data: URLSearchParams;
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  private baseURL= 'http://localhost/smart_school/index.php/api/employee';
       constructor( private http: HttpClient) {  }

    // GET: get employee
      GetEmployee(id: string | number = 0): Observable<IEmployee[]> {
          console.log(id);
          if (id) {
            return this.http.get<IEmployee[]>(`${this.baseURL}/${id}`);
              } else {
            return this.http.get<IEmployee[]>(`${this.baseURL}`);
      }

    }
    // POST: post employee to database
    PostEmployee(newEmployee: IEmployee): Observable<IEmployee> {
        const options = { 'headers': this.header };
        this.data = this.setDataModel(newEmployee);
  return this.http.post<IEmployee>(`${this.baseURL}`, this.data.toString(), options);
}
    // PUT: update employee on the server

    UpdateEmployee(updatedEmployee: IEmployee, id: number): Observable<IEmployee> {
        this.data = this.setDataModel(updatedEmployee);
        const options = { 'headers': this.header };
  return this.http.post<IEmployee>(`${this.baseURL}/${id}`, this.data.toString(), options);
}
    // DELETE: delete employee from server
    DeleteEmployee(id: number): Observable<IEmployee> {
       const url = `${this.baseURL}/${id}`;
          return this.http.delete(url, httpOptions);
}

  private setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
      dataModel.set('Employee_id', formModel.Employee_id);
      dataModel.set('Full_Name', formModel.Full_Name);
      dataModel.set('Bith_Date', formModel.Bith_Date);
      dataModel.set('Gender', formModel.Gender);
      dataModel.set('Address_Code', formModel.Address_Code);
      dataModel.set('Employment_Date', formModel.Employment_Date);
      dataModel.set('Blood_Group', formModel.Blood_Group);

   return dataModel;

}

}

