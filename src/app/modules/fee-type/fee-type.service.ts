import { Injectable } from '@angular/core';
import {CrudService} from './../../services/crud.service';

@Injectable()
export class FeeTypeService extends CrudService {

  protected url = '/fee-type/';
}
