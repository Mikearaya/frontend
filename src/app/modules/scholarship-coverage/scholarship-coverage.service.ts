import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IScholarshipCoverage } from '../scholarship-coverage/scholarship-coverage.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class ScholarshipCoverageService {
  data: URLSearchParams;
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  private baseURL = 'http://localhost/smart-school/index.php/api';

  constructor(private http: HttpClient) { }
  private extractData(res, any) {
  }
  private handleError(error: HttpErrorResponse) {
  }
// GET: get Scholarshp Coverage
GetCoverage(id: string | number = 0): Observable < IScholarshipCoverage[] > {
    console.log(id);
    if (id) {
      return this.http.get<IScholarshipCoverage[]>(`${this.baseURL}/scholarship-coverage/${id}`);
    } else {
return this.http.get < IScholarshipCoverage[] > (`${this.baseURL}/scholarship-coverage`);
    }

  }
// POST: post Scholarship Coverage to database
PostCoverage(newEmployee: IScholarshipCoverage): Observable < IScholarshipCoverage > {
    const options = { 'headers': this.header };
    this.data = this.setDataModel(newEmployee);
return this.http.post < IScholarshipCoverage > (`${this.baseURL}`, this.data.toString(), options);
  }
// PUT: update Scholarship Coverage on the server

UpdateCoverage(updatedEmployee: IScholarshipCoverage, id: number): Observable < IScholarshipCoverage > {
    this.data = this.setDataModel(updatedEmployee);
    const options = { 'headers': this.header };
return this.http.post < IScholarshipCoverage > (`${this.baseURL}/${id}`, this.data.toString(), options);
  }
// DELETE: delete Scholarship Coverage from server
  DeleteCoverage(id: number): Observable < IScholarshipCoverage > {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete(this.baseURL);
  }
  // Data model

  private setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
    dataModel.set('id', formModel.id);
    dataModel.set('scholarship_code', formModel.scholarship_code);
    dataModel.set('fee_type_code', formModel.fee_type_code);
    dataModel.set('amount', formModel.amount);
    dataModel.set('amount_type', formModel.amount_type);


    return dataModel;

  }


}
