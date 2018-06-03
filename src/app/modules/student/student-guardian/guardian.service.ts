import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class IGuardian {
  student_id: number;
  full_name: string;
  phone: string;
  house_no: string;
  relation: string;
  sub_city: string;
  city: string;
  wereda: string;
  gender: string;
  date_of_birth: string;

}


export class GuardianService {
  private url = 'http://localhost/smart_school/index.php/api/guardian';
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  data: URLSearchParams;
  constructor(private httpClient: HttpClient) { }

  getGardian(id: number = 0): Observable<IGuardian[]> {
    if (id) {
    return this.httpClient.get<IGuardian[]>(`${this.url}`);
    } else {
    return this.httpClient.get<IGuardian[]>(`${this.url}/${id}`);
    }
  }

}

