import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../template-classes/student';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
  private url = 'http://localhost/smart_school/index.php/api/';

  constructor(private http: HttpClient) {

   }

   getStudents(): Observable<Student[]> {
     return this.http.get<Student[]>(`${this.url}/students`);

   }

}
