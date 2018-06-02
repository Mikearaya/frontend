import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable()
export class ItemsServices {
    private url  = 'http://localhost:3000/items';

    constructor(private http: HttpClient) { }

    private cmpntIdentifier() {
        this.url = this.url ;
        return this.url;
      }

    getData (param: any) {
        return this.http.get(this.cmpntIdentifier())
            .map((response: Response) => response.json());
    }
}
