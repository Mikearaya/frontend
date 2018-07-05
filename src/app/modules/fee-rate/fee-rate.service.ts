import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';


@Injectable()
export class FeeRateService extends CrudService {
    protected url = '/fee-rate/';
}
