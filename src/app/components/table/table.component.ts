import { Component, OnInit, Input, ViewChild, AfterViewInit, EventEmitter , Output, ElementRef } from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {PageEvent} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { DataViewDataSource } from './data-table.datasource';
import { ActivatedRoute, Router } from '@angular/router';

import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataTableService } from './data-table.service';
import { FormControl } from '@angular/forms';

const allowMultiSelect = true;
const initialSelection = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {

 viewColumns: any[] = ['select'];

  displayedColumns: String[] = [];
  filteredColumns: any[] = [];
 selectedColumns: FormControl;
  currentPage: string;
  dataSource: DataViewDataSource;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  displayedColumnsWith: any ['select'];
  selection = new SelectionModel(true, []);

  constructor(private route: ActivatedRoute,
    private crudService: DataTableService,
    private router: Router
  ) {

   }


  ngOnInit() {
    this.dataSource = new DataViewDataSource(this.crudService);
    this.dataSource.currentColumns$.subscribe((data ) => {
                                        this.viewColumns = data;
                                        this.displayedColumns = ['select'];
                                        data.forEach((col) => this.displayedColumns.push(col));
                                        this.selectedColumns = new FormControl(this.displayedColumns);
                                        this.displayedColumns.splice(0, 0, 'select');
                                      }
                                  );
    this.dataSource.currentColumns$.subscribe((data ) => this.displayedColumns = data);
    this.route.params.subscribe(params => {
            this.currentPage = params['id']; // (+) converts string 'id' to a number
            this.dataSource.loadData(this.currentPage);
          });
    this.selection = new SelectionModel(allowMultiSelect, initialSelection);

    }
 manageView(selection: any) {
   this.displayedColumns = selection;
   this.displayedColumns.splice(0, 0, 'select');
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
      .subscribe();
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      merge(this.sort.sortChange, this.paginator.page).pipe(
        tap(() => this.viewData())
      )
      .subscribe();
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
