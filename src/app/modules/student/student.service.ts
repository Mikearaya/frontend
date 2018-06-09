import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

export class IStudent {
  select: Boolean;
  id_no: number;
  id: number;
  full_name: string;
  gender: string;
  birthdate: string;
  blood_group: string;
}

@Injectable()
export class StudentService {

  private url = 'http://localhost/smart_school/index.php/api/students';
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  data: URLSearchParams;

        constructor( private http: HttpClient) { }

        getStudents(id: number = 0): Observable<IStudent[]> {
          console.log(id);
          if (id) {
            return this.http.get<IStudent[]>(`${this.url}/${id}`).pipe(
              retry(3),
              map(res => {
                if (!res) {
                  throw new Error('Unexpected Error');
                }
                return res;
              }),
              catchError(err => of([]))
            );
          } else {
            return this.http.get<IStudent[]>(`${this.url}`);
          }

        }

        addStudent(newStudent: IStudent): Observable<IStudent> {
              const options = { 'headers': this.header };
              this.data = this.setDataModel(newStudent);
          return this.http.post<IStudent>(`${this.url}`, this.data.toString(), options);
        }

        updateStudent(updatedStudent: IStudent, id: number): Observable<IStudent> {
              this.data = this.setDataModel(updatedStudent);
              const options = { 'headers': this.header };
          return this.http.post<IStudent>(`${this.url}/${id}`, this.data.toString(), options);
        }

        deleteStudent(deletedId: number): Observable<Boolean> {
          return this.http.delete<Boolean>(`${this.url}/${deletedId}`);
        }


      private setDataModel(formModel: any): URLSearchParams {
          const dataModel = new URLSearchParams();
            dataModel.set('full_name', formModel.full_name);
            dataModel.set('gender', formModel.gender);
            dataModel.set('blood_group', formModel.blood_group);
            dataModel.set('birthdate', formModel.birthdate);
            dataModel.set('hasGuardian', 'true');
            dataModel.set('region', formModel.address.region );
            dataModel.set('wereda', formModel.address.wereda );
            dataModel.set('phone', formModel.address.phone );
            dataModel.set('city', formModel.address.city );
            dataModel.set('sub_city', formModel.address.subCity );
            dataModel.set('mobile', formModel.address.mobile );
            dataModel.set('house_no', formModel.address.houseNo );
            dataModel.set('post_code', formModel.address.postCode );
         return dataModel;

      }

}
