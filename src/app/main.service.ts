import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<any[]>('http://localhost/smart_school/index.php/api/students');
  }

}
