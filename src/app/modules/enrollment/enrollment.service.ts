import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';

@Injectable()
export class EnrollmentService extends CrudService {
  protected url = '/enrollment/';
}
