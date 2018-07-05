import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';

@Injectable()
export class ScholarshipsService extends CrudService {
  protected url = '/scholarships/';

}
