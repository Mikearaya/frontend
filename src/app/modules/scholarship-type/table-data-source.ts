import { TableService } from './table.service';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IScholarshipCoverage } from '../scholarship-coverage/scholarship-coverage.model';

export class TableDataSource implements DataSource<IScholarshipCoverage> {

    private coverageSubject = new BehaviorSubject<IScholarshipCoverage[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private tableService: TableService) { }

    connect(collectionViewer: CollectionViewer): Observable<IScholarshipCoverage[]> {
        return this.coverageSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.coverageSubject.complete();
        this.loadingSubject.complete();
    }

    loadCoverages(scholarship_code: number | string,
        filter: '',
        sortDirection: 'asc',
        pageIndex: 0,
        pageSize: 5) {
        this.loadingSubject.next(true);

        this.tableService.fetchCoverage(scholarship_code, filter,
            sortDirection, pageIndex, pageSize).pipe(
               // catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            );
    }

}
