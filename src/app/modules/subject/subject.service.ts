import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ISubject {
  id?: number;
  title: string;
  grade_weightage: string;
  code: string;
  subject_type: string;
}

@Injectable()
export class SubjectService {

      private url = 'http://localhost/smart_school/index.php/api/subjects';
      private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      private data: URLSearchParams;

        constructor(private httpClient: HttpClient) { }

          getSubjects(id: number = 0): Observable<ISubject[]> {
              return (id) ? this.httpClient.get<ISubject[]>(`${this.url}/${id}`) :
                            this.httpClient.get<ISubject[]>(`${this.url}`);
          }

          addSubject(newSubject: any): Observable<any> {
              const options = {'headers' : this.header};
              const data = this.setDataModel(newSubject);
            return this.httpClient.post<any>(`${this.url}`, data.toString(), options );
          }

          updateSubject(updatedSubject: any, id: number): Observable<any> {
                  const options = {'headers' : this.header};
                  const data = this.setDataModel(updatedSubject);
              return this.httpClient.post(`${this.url}/${id}`, data.toString(), options);
          }

          deleteSubject(deletedId: number): Observable<boolean> {
            return this.httpClient.delete<boolean>(`${this.url}/${deletedId}`);
          }


        private setDataModel(formModel: any[]): URLSearchParams {
              const dataModel = new URLSearchParams();
              formModel.forEach((form, i) => {

              dataModel.append('title[]', form['title']);
              dataModel.append('subject_type[]', form['type']);
              dataModel.append('grade_weightage[]', form['creditHr']);
              dataModel.append('code[]', form['code'] ? form['code'] : '');

            });
          return dataModel;
        }

}
