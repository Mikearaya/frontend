import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
    export class EmployeeService extends CrudService {

  constructor(private httpClient: HttpClient) {
    super(httpClient, '/employee/');
  }

}

