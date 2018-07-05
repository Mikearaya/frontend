import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';

@Injectable()
export class UserService extends CrudService {
  protected url = '/users/';
}
