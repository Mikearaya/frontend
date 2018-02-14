import { Component, OnInit , AfterViewInit , ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { GridServices } from '../../services/grid.services';
import { PageEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, AfterViewInit {
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;
  displayedColumnsWith: any [];
  items: any;
  datakey: any;
  selection = new SelectionModel(true, []);
  pageindex= (this.pageEvent) ? this.pageEvent.pageIndex : 0;
  mydata= null;
  dataSource= null;
  length: number;
  itemsList: DataTable;
  private sub: any;
  id: string;
  columns: any;
  lenght: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private gridservices: GridServices) {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.lenght = 10;
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      if (this.items) {
        this.dataSource = new MatTableDataSource(this.items.result);
        console.log(this.items);
        this.displayedColumnsWith = this.items.columns.slice();
        if (this.datakey) {
          this.displayedColumnsWith.unshift('select');
        }
      }
   });
  }

  ngAfterViewInit() {
    this.getItems(this.id);
    console.log(this.items);
    if (this.items) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  getItems(id) {
    this.gridservices.getData(id)
      .subscribe(items => this.items = items );
  }

  populate(data) {
    this.items = data.result;
    this.columns = data.columns;
  }

  view(selectedItem: any[]) {
    console.log(selectedItem);
  }

  addnew() {
    console.log('Hello There');
  }

  delete(selectedItem: any[]) {
    console.log(selectedItem);
  }

}
export interface DataTable {
  columns: any [];
  result: any [];
}
