import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { IScholarships } from './scholarships.model';


@Injectable()
export class ScholarshipsService {
  data: URLSearchParams;
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  private baseURL = 'http://localhost/smart-school/index.php/api/scholarships';

constructor(private http: HttpClient) { }
  private extractData(res, any) {
    const body = res.JSON();
    return body.fields || {};
  }
  private handleError(error: HttpErrorResponse) {
    console.error('post error: ', error);
    return Observable.throw(error.statusText);
  }
  // GET: get scholarship
  GetScholarship(id: string | number = 0): Observable<IScholarships[]> {
    console.log(id);
    if (id) {
      return this.http.get<IScholarships[]>(`${this.baseURL}/${id}`)
        .pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
    } else {
      return this.http.get<IScholarships[]>(`${this.baseURL}`)
        .pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
    }

  }
  // POST: post scholarship to database
  PostScholarship(newScholarship: IScholarships): Observable<IScholarships> {
    const options = { 'headers': this.header };
    this.data = this.setDataModel(newScholarship);
    return this.http.post<IScholarships>(`${this.baseURL}`, this.data.toString(), options);
  }
  // PUT: update scholarship on the server

  UpdateScholarship(updatedScholarship: IScholarships, id: number): Observable < IScholarships > {
    this.data = this.setDataModel(updatedScholarship);
    const options = { 'headers': this.header };
    return this.http.post<IScholarships>(`${this.baseURL}/${id}`, this.data.toString(), options);
  }
  // DELETE: delete scholarship from server
  DeleteScholarship(id: number): Observable<IScholarships> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete(this.baseURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  private setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
    dataModel.set('id', formModel.id);
    dataModel.set('Scholarship_type', formModel.Scholarship_type);
    dataModel.set('Application_Code', formModel.Application_Code);
    dataModel.set('date', formModel.date);

    return dataModel;

  }

}
