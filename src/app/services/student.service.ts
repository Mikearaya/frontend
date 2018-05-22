import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
  private url = 'http://localhost/smart_school/index.php/api/';

  constructor(private http: HttpClient) {

   }

   getStudents(): Observable<Student[]> {
     return this.http.get<Student[]>(`${this.url}/students`);

   }

   addStudent(newStudent: Student): Observable<Student> {
     return this.http.post<Student>(`${this.url}/students`, newStudent);
   }

   updateStudent(updatedStudent: Student, $id: number): Observable<Student> {
     return this.http.put<Student>(`${this.url}/students/${$id}`, updatedStudent);
   }

   deleteStudent(deletedId: number): Observable<Student> {
     return this.http.delete<Student>(`${this.url}/students/${deletedId}`);
   }

}
