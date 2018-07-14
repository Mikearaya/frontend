import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IScholarshipCoverage } from '../scholarship-coverage/scholarship-coverage.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {

  constructor(private http: HttpClient) { }
  data = HttpParams;
  fetchCoverage(
    scholarship_code: number | string, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 10):  Observable<IScholarshipCoverage[]> {

    return this.http.get('/http://localhost/smart_school/index.php/api/scholarship_coverage/', {
        params: new HttpParams()
            .set('scholarship_code', scholarship_code.toString())
            .set('filter', filter)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(
       map(res =>  res['payload'])
    );
}
}
