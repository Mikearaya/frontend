import { Component, OnInit, Input, ViewChild, AfterViewInit, EventEmitter , Output } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

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
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;
  displayedColumnsWith: any [];
  selection = new SelectionModel(true, []);
  pageindex= (this.pageEvent) ? this.pageEvent.pageIndex : 0;
  mydata= null;
  dataSource= null;
  length: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    //console.log('all number selected');
    //console.log(numSelected);
    const numRows = this.dataSource.data.length;
   // console.log('number rows');
   // console.log(numRows);
    return numSelected === numRows;
  }

  masterToggle() {
    console.log('selection');
          console.log(this.selection);
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row =>  
          { 
            this.selection.select(row)
          });
  }

  ngOnInit() {
    this.dataSource = this.paginator;
        this.dataSource = this.sort;
      if (this.items) {
        this.dataSource = new MatTableDataSource(this.items);
        console.log(this.items);
        this.displayedColumnsWith = this.displayedColumns.slice();
        if (this.datakey) {
          this.displayedColumnsWith.unshift('select');
        }
      }

  }

  getData(items) {

    if (items.length) {
      this.dataSource = new MatTableDataSource(items);
      this.displayedColumnsWith = this.displayedColumns.slice();
      if (this.datakey) {
        this.displayedColumnsWith.unshift('select');
      }
      return this.dataSource;
    }
  }

  ngAfterViewInit() {
    if (this.items) {
      console.log(this.items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
