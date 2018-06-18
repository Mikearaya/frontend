import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {CrudService} from './../../services/crud.service';

@Injectable()
export class EventsService extends CrudService {
  data: URLSearchParams;
  protected Url = 'http://localhost/smart_school/index.php/api/events/';
}
