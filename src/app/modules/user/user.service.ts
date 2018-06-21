import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';

@Injectable()
export class UserService extends CrudService {
  data: URLSearchParams;
  protected Url = 'http://localhost/smart_school/index.php/api/users/';
}
