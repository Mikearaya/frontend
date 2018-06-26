import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudService {
  protected Url;
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {  }
 // GET: get data from DB
  getData(id: number = 0): Observable<any[]> {
    console.log(this.Url);
   if (id) {
      return this.http.get <any[]>(`${this.Url}${id}`);
    } else {
      return this.http.get <any[]>(`${this.Url}`);
    }
  }
 // POST: Inserting data to DB
  postData(newData: any): Observable<any> {
    const body = JSON.stringify(newData);
    const options = { 'headers': this.header };
    return this.http.post<any>(`${this.Url}`, options);
  }
  // UPDATE: update data method
  updateData(updatedData: any, id: number) {
    const body = JSON.stringify(updatedData);
    const options = { 'headers': this.header };
    return this.http.put(this.Url + id,
      body,
      options);
  }
   // DELETE: deleting data in DB
  deleteData (id: number) {
    const url = `${this.Url}/${id}`;
    return this.http.delete(url);
  }
//   setDataModel(formModel: any): URLSearchParams {
//     const dataModel = new URLSearchParams();
//       dataModel.set('full_name', formModel.full_name);
//    return dataModel;

// }
  // .map(res => res.json());
}
