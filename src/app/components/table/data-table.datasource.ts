
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';

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
  private columnSubject = new BehaviorSubject<any[]>([]);
totalRow$ = this.countingSubject.asObservable();
loading$ = this.loadingSubject.asObservable();
  data: any[];
currentColumns$ = this.columnSubject.asObservable();

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
    this.columnSubject.complete();
  }

  loadData(table, filter = '', sortColumn = '', sortOrder = '', pageNumber = 0, pageSize = 5) {
    this.loadingSubject.next(true);
    this.crudService.displayData(table, filter, sortColumn, sortOrder, pageNumber, pageSize).pipe(
      catchError(() => of(['error'])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((result: DataViewModel) => {
      console.log('data source initialized');
      console.log(result);
          this.countingSubject.next(result.total);
          this.data = result.data;
          this.columnSubject.next(result.columns);
          this.dataSubject.next(result.data);
    });
  }
}


