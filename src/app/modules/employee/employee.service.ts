import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';


@Injectable()
    export class EmployeeService extends CrudService {
  protected url = '/employee/';

}

