import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';



export class IStudent {
  select?: Boolean;
  id_no: Number;
  id: Number;
  full_name: string;
  gender: string;
  birthdate?: string;
  blood_group?: string;
}


@Injectable()
export class StudentService {
  private url = 'http://localhost/smart_school/index.php/api/students';
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  data: URLSearchParams;
  constructor(private http: HttpClient) {

   }

   getStudents(id: number = 0): Observable<any> {
     console.log(id);
     if (id === 0) {
      return this.http.get<IStudent>(`${this.url}`);
     } else {
      return this.http.get<IStudent[]>(`${this.url}/${id}`);
     }

   }

   addStudent(newStudent: IStudent): Observable<IStudent> {
      this.data = this.setDataModel(newStudent);
      const options = { 'headers': this.header };
     return this.http.post<IStudent>(`${this.url}`, this.data.toString(), options);
    }

   updateStudent(updatedStudent: IStudent, id: number): Observable<IStudent> {
        this.data = this.setDataModel(updatedStudent);
        const options = { 'headers': this.header };
      return this.http.post<IStudent>(`${this.url}/${id}`, this.data.toString(), options);
   }

   deleteStudent(deletedId: number): Observable<any> {
     return this.http.delete<IStudent>(`${this.url}/${deletedId}`);
   }

   private setDataModel(formModel: IStudent): URLSearchParams {
    const dataModel = new URLSearchParams();
      dataModel.set('full_name', formModel.full_name);
      dataModel.set('gender', formModel.gender);
      dataModel.set('blood_group', formModel.blood_group);
      dataModel.set('birthdate', formModel.birthdate);

      const address = {
        'hasAddress' : false,
        'region': 'Addis Ababa'
      };
      dataModel.append('address', JSON.stringify(address));

  return dataModel;
 }

}
