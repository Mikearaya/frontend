import { Injectable } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Injectable()
export class ScholarshipCoverageService extends CrudService {
  protected url = '/scholarship_coverage/';


}
