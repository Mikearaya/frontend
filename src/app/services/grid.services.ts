import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class GridServices {
    private url  = 'http://localhost/smart_school/index.php/api/';

    constructor(private https: HttpClient) { }
    private cmpntIdentifier(param: string) {
        return this.url + param ;
      }

      getData(param: any) {
        return this.https.get(this.cmpntIdentifier(param))
            .map((response: any) => response);
    }
    getRequest(param: any): Observable<any> {
        const requestUrl = this.cmpntIdentifier(param);
        return this.https.get<any>(requestUrl);
    }
}
