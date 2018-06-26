import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';


@Injectable()
export class FeeRateService extends CrudService {
    data: URLSearchParams;
    protected Url = 'http://localhost/smart_school/index.php/api/fee-rate/';
}
