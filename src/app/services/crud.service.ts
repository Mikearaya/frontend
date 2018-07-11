import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { DataViewModel } from '../components/table/data-table.datasource';

@Injectable()
export class CrudService {
  baseUrl = 'http://localhost/smart_school/index.php/api';
  Url = `${this.baseUrl}`;
  private httpBody: URLSearchParams;
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient, url: String) {
    this.Url = `${this.baseUrl}/${url}`;
   }
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
    console.log(newData);
    this.httpBody = this.setDataModel(newData);
    console.log(this.httpBody);
    const options = { 'headers': this.header };
    return this.http.post<any>(`${this.Url}`, this.httpBody.toString(), options);
  }
  // UPDATE: update data method
  updateData(updatedData: any, id: number) {
    const Data = this.setDataModel(updatedData);
    const options = { 'headers': this.header };
    return this.http.put(this.Url + id, JSON.stringify(Data), options);
  }
   // DELETE: deleting data in DB
  deleteData (id: number) {
    const url = `${this.Url}/${id}`;
    return this.http.delete(url);
  }
  // getting the dataModel in all modules service
  setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
      for (const key in  formModel) {
        if (formModel.hasOwnProperty(key)) {
            const value = formModel[key];
            if (value instanceof Object) {
              for (const key2 in value) {
                if (value.hasOwnProperty(key2)) {
                  const element = value[key];
                  dataModel.set(`${value}[${key2}]`, element);
                }
              }
            } else {
              dataModel.set(`${key}`, value);
            }
          }
      }
    return dataModel;

    }

    displayData(table, filter = '', sortColumn = '', sortOrder = 'asc', pageNumber = 0, pageSize = 5): Observable<DataViewModel> {
        return this.http.get<DataViewModel>(`${this.Url}/${table}`, {
          params: {
            filter_string: filter,
            sort_column: sortColumn,
            sort_order: sortOrder,
            page_number: pageNumber.toString(),
            page_size: pageSize.toString()
          }
        });
    }
}
