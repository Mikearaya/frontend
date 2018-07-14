import { Injectable } from '@angular/core';
import { DataViewModel } from './data-table.datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataTableService {
  Url  = 'http://localhost/smart_school/index.php/api/data/filter';

  constructor(private httpClient: HttpClient) { }


  displayData(table, filter = '', sortColumn = '', sortOrder = 'asc', pageNumber = 0, pageSize = 5): Observable<DataViewModel> {
    return this.httpClient.get<DataViewModel>(`${this.Url}/`, {
      params: {
        table_name: table,
        filter_string: filter,
        sort_column: sortColumn,
        sort_order: sortOrder,
        page_number: pageNumber.toString(),
        page_size: pageSize.toString()
      }
    });

}
}
