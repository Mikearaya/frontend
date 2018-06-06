import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IScholarshipType } from '../../models/models';
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
    export class ScholarshipTypeService {
        private baseURL= 'http://localhost/smart-school/index.php/scholarship_type';
        constructor(private http: HttpClient) {}

      private extractData(res, any) {
        const body = res.JSON();
        return body.fields || { };
    }


    private handleError(error: HttpErrorResponse) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    getScholarshipTypes(): Observable<IScholarshipType> {
        return this.http.get(this.baseURL)
           .pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }
    getScholarshipType(id: string): Observable<IScholarshipType> {
        const url = `${this.baseURL}/${id}`;
            return this.http.get(url)
              .pipe(
              map(this.extractData),
              catchError(this.handleError)
        );
    }


    PostScholarshipType(scholarshiptype: IScholarshipType): Observable<IScholarshipType> {
         console.log('posting scholarshiptype', IScholarshipType);
            const body = JSON.stringify(scholarshiptype);


    return this.http.post(this.baseURL, body, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);

    }

    updateScholarshipType(id: number, scholarshiptype: IScholarshipType): Observable<IScholarshipType> {
        console.log('updating scholarshiptype', IScholarshipType);
            const body = JSON.stringify(scholarshiptype);

        return this.http.post(`${this.baseURL}/${id}`, body, httpOptions)
          .pipe(
              catchError(this.handleError)
          );
    }

    deleteScholarshipType(id: number): Observable<IScholarshipType> {
        const url = `${this.baseURL}/${id}`;
            return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
}
