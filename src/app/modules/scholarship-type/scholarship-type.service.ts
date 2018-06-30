import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IScholarshipType} from '../scholarship-type/scholarship-type.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import { CrudService } from './../../services/crud.service';

@Injectable()
export class ScholarshipTypeService extends CrudService {
  data: URLSearchParams;
  protected Url = 'http://localhost/smart_school/index.php/api/scholarship_type/';

  private setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
      dataModel.set('Name', formModel.Name);
      dataModel.set('Value', formModel.Value);
      dataModel.set('Value_Type', formModel.Value_Type);

    return dataModel;

  }

}
