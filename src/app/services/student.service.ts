import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
  private url = 'http://localhost/smart_school/index.php/api/';
  data: URLSearchParams;
  constructor(private http: HttpClient) {

   }

   getStudents(id: number = 0): Observable<Student[]> {
     if (id) {
      return this.http.get<Student[]>(`${this.url}/students/${id}`);
     } else {
      return this.http.get<Student[]>(`${this.url}/students`);
     }

   }

   addStudent(newStudent: Student): Observable<Student> {
      this.data = new URLSearchParams();
      const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      const options = { 'headers': myheader };
      this.data.set('full_name', newStudent.full_name);
      this.data.set('gender', newStudent.gender);
      this.data.set('blood_group', newStudent.blood_group);
      this.data.set('birthdate', newStudent.birthdate);

     return this.http.post<Student>(`${this.url}/students`, this.data.toString(), options);
   }

   updateStudent(updatedStudent: Student, $id: number): Observable<Student> {
     return this.http.put<Student>(`${this.url}/students/${$id}`, updatedStudent);
   }

   deleteStudent(deletedId: number): Observable<Student> {
     return this.http.delete<Student>(`${this.url}/students/${deletedId}`);
   }

}
