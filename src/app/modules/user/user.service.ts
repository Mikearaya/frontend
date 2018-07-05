import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService extends CrudService {
  protected url = '/users/';
  constructor(private httpClient: HttpClient) {
    super(httpClient, '/users/');
  }
}
