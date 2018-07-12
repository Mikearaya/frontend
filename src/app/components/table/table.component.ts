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

const allowMultiSelect = true;
const initialSelection = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {

  customerViewColumns = [
    {key: 'first_name', humanReadable: 'First Name'},
    {key: 'last_name', humanReadable: 'Last Name'},
    {key: 'nationality', humanReadable: 'Nationality'},
    {key: 'country', humanReadable: 'country'},
    {key: 'city', humanReadable: 'city'},
    {key: 'house_no', humanReadable: 'House Number'},
    {key: 'driving_licence_id', humanReadable: 'Driving Licence ID'},
    {key: 'passport_number', humanReadable: 'Passport Number'},
    {key: 'hotel_name', humanReadable: 'Hotel Name'},
    {key: 'hotel_phone', humanReadable: 'Hotel Phone'},
    {key: 'mobile_number', humanReadable: 'Mobile'},
    {key: 'other_phone', humanReadable: 'Other Phone'},
    {key: 'registered_on', humanReadable: 'Registered'},
  ];

  displayedColumns: String[] = ['select', 'first_name', 'last_name', 'mobile_number', 'driving_licence_id', 'registered_on'];

  currentPage: string;
  dataSource: DataViewDataSource;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  displayedColumnsWith: any [];
  selection = new SelectionModel(true, []);

  constructor(private route: ActivatedRoute,
    private crudService: DataTableService,
    private router: Router
  ) {   }


  ngOnInit() {
    this.dataSource = new DataViewDataSource(this.crudService);
    this.dataSource.currentColumns$.subscribe((data ) => this.customerViewColumns = data);
    this.dataSource.currentColumns$.subscribe((data ) => this.displayedColumns = data);
    this.route.params.subscribe(params => {
            this.currentPage = params['id']; // (+) converts string 'id' to a number
            this.dataSource.loadData(this.currentPage);
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
