
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, catchError, finalize } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';
import { CrudService } from '../../services/crud.service';
import { DataTableService } from './data-table.service';

// TODO: Replace this with your own data model type
export interface DataViewModel {
  data: any[];
  total: number;
  columns: any[];
}



export class DataViewDataSource extends DataSource<any> {
  private dataSubject = new BehaviorSubject<any[]>([]);
  private countingSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<Boolean>(false);
  public totalRow$ = this.countingSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();
  public data: any[];
  public columns: any[];
  constructor(private crudService: DataTableService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.dataSubject.asObservable();
  }

  disconnect() {
    this.loadingSubject.complete();
    this.dataSubject.complete();
    this.countingSubject.complete();
  }

  loadData(table, filter = '', sortColumn = '', sortOrder = '', pageNumber = 0, pageSize = 5) {
    this.loadingSubject.next(true);
    this.crudService.displayData(table, filter, sortColumn, sortOrder, pageNumber, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((result: DataViewModel) => {
          this.countingSubject.next(result.total);
          this.data = result.data;
          this.columns = result.columns;
          this.dataSubject.next(result.data);
    });
  }
}


