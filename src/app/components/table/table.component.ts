import { Component, OnInit, Input, ViewChild, AfterViewInit, EventEmitter , Output, ElementRef } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { DataViewDataSource } from './data-table.datasource';
import { ActivatedRoute, Router } from '@angular/router';

import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataTableService } from './data-table.service';

const allowMultiSelect = true;
const initialSelection = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {
  @Output() addnew = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Input() items: any[];
  @Input() datakey: any;
  @Input() readonly = false;
  @Input() displayedColumns: any [];
  @Input() showEvent: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  currentPage: string;
  dataSource: DataViewDataSource;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;
  cols: any[];
  displayedColumnsWith: any [];
  selection = new SelectionModel(true, []);
  pageindex= (this.pageEvent) ? this.pageEvent.pageIndex : 0;
  mydata= null;

  length: number;

  constructor(private route: ActivatedRoute,
    private crudService: DataTableService,
    private router: Router,
    private httpClient: HttpClient
  ) {   }


  ngOnInit() {
    this.dataSource = new DataViewDataSource(this.crudService);
    this.route.params.subscribe(params => {
            this.currentPage = params['id']; // (+) converts string 'id' to a number
            this.viewData();
          });
    this.selection = new SelectionModel(allowMultiSelect, initialSelection);
    }

    ngAfterViewInit() {
          fromEvent(this.input.nativeElement, 'keyup').pipe(
            debounceTime(500),
            distinctUntilChanged(),
            tap(() => {
              this.paginator.pageIndex = 0 ;
              this.viewData();
            })
          )
      .subscribe((data) => console.log(data));
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      merge(this.sort.sortChange, this.paginator.page).pipe(
        tap(() => this.viewData())
      )
      .subscribe((data) => console.log(data));
  }


viewData() {
this.dataSource.loadData(
                          this.currentPage,
                          this.input.nativeElement.value,
                          this.sort.active,
                          this.sort.direction,
                          this.paginator.pageIndex,
                          this.paginator.pageSize
                      );
}

    isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    }


    masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));

    }


}
