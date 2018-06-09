import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ScholarshipCoverageService } from './../modules/scholarship-coverage/scholarship-coverage.service';
import { Url } from './../modules/scholarship-coverage/scholarship-coverage.service';

@Injectable()
export class CrudService {
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {  }
 // GET: get data from DB
  getData(id: number = 0): Observable<any[]> {
    console.log(id);
    if (id) {
      return this.http.get <any[]>(`${this.baseURL}`${id});
    } else {
      return this.http.get <any[]>(`${this.Url}`);
    }
  }
 // POST: Inserting data to DB
  postData(newData: any): Observable<any> {
    const body = JSON.stringify(newData);
    const options = { 'headers': this.header };
    return this.http.post<any>(`${this.baseURL}`, options);
  }
  // UPDATE: update data method
  updateData(updatedData: any, id: number) {
    const body = JSON.stringify(updatedData);
    const options = { 'headers': this.header };
    return this.http.put(this.baseURL + id,
      body,
      options);
  }
   // DELETE: deleting data in DB
  deleteData (id: number) {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete(url);
  }
  // .map(res => res.json());
}
