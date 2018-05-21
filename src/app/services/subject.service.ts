import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../template-classes/subject';

@Injectable()
export class SubjectService {
  private url = 'http://localhost/smart_school/index.php/api/';
  constructor(private http: HttpClient) { }

  getSuubjects() {
    this.http.get<Subject[]>(`${this.url}/subjects/`);
  }

}
