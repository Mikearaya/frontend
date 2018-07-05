import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';

@Injectable()
export class ScholarshipTypeService extends CrudService {
  protected url = '/scholarship_type/';

}
