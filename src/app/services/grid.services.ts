import { Injectable } from '@angular/core';
import { Http,  Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class GridServices {
    private url  = 'http://smartschool.net/api/';

    constructor(private http: Http) { }
    private cmpntIdentifier(param: string) {
        return this.url + param ;
      }

      getData(param: any) {
        return this.http.get(this.cmpntIdentifier(param))
            .map((response: Response) => response.json());
    }
}
