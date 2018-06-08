import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IScholarshipType} from '../scholarship-type/scholarship-type.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';

@Injectable()
export class ScholarshipTypeService {
  data: URLSearchParams;
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  private baseURL = 'http://localhost/smart-school/index.php/scholarship-type';

  constructor( private http: HttpClient) { }
      private extractData(res, any) {
        const body = res.JSON();
        return body.fields || {};
      }
      private handleError(error: HttpErrorResponse) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
      }
// GET: get scholarshp type
  GetType(id: string | number = 0): Observable<IScholarshipType[]> {
    console.log(id);
    if (id) {
      return this.http.get<IScholarshipType[]>(`${this.baseURL}/scholarship-type/${id}`)
        .pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
    } else {
      return this.http.get < IScholarshipType[] > (`${this.baseURL}/scholarships`)
        .pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
    }

  }
// POST: post scholarshp type to database
  PostType(newType: IScholarshipType): Observable<IScholarshipType> {
    const options = { 'headers': this.header };
    this.data = this.setDataModel(newType);
    return this.http.post<IScholarshipType>(`${this.baseURL}`, this.data.toString(), options);
  }
  // PUT: update scholarshp type on the server

  UpdateType(updatedType: IScholarshipType, id: number): Observable<IScholarshipType> {
    this.data = this.setDataModel(updatedType);
    const options = { 'headers': this.header };
    return this.http.post<IScholarshipType>(`${this.baseURL}/${id}`, this.data.toString(), options);
  }
// DELETE: delete scholarshp type from server
  DeleteType(id: number): Observable<IScholarshipType> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete(this.baseURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  private setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
      dataModel.set('Name', formModel.Name);
      dataModel.set('Value', formModel.Value);
      dataModel.set('Value_Type', formModel.Value_Type);

    return dataModel;

  }

}
