import { Injectable } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScholarshipCoverageService extends CrudService {

  constructor(private httpClient: HttpClient) {
    super(httpClient, '/scholarship_coverage/');
  }
  getScholarship() {
    return this.httpClient.get <any[]>(`${this.baseUrl}/${'scholarships'}`);
  }
  getFeeType() {
    return this.httpClient.get<any[]>(`${this.baseUrl}/${'feetype'}`);
  }
}
