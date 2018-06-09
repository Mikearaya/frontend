import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IScholarshipCoverage } from '../scholarship-coverage/scholarship-coverage.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { CrudService } from '../../services/crud.service';

export class Url {
baseURL = 'http://localhost/smart-school/index.php/api';
}

@Injectable()
export class ScholarshipCoverageService extends CrudService {
  data: URLSearchParams;
  protected Url;
  private baseURL = 'http://localhost/smart-school/index.php/api';


  // Data model

  private setDataModel(formModel: any): URLSearchParams {
    const dataModel = new URLSearchParams();
    dataModel.set('id', formModel.id);
    dataModel.set('scholarship_code', formModel.scholarship_code);
    dataModel.set('fee_type_code', formModel.fee_type_code);
    dataModel.set('amount', formModel.amount);
    dataModel.set('amount_type', formModel.amount_type);


    return dataModel;

  }


}
