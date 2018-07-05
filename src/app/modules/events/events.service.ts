import { Injectable } from '@angular/core';
import {CrudService} from './../../services/crud.service';

@Injectable()
export class EventsService extends CrudService {
  protected url = '/events/';
}
