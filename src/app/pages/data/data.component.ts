import { Component, OnInit , AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GridServices } from '../../services/grid.services';
import {Location} from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  items: DataTable;
  private sub: any;
  currentPage: string;
  columns: any;
  lenght: number;
  private url = 'http://localhost/smart_school/index.php/api/';
  constructor(private route: ActivatedRoute, private gridservices: GridServices, private router: Router,
  private httpClient: HttpClient) {}

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.currentPage = params['id']; // (+) converts string 'id' to a number

      this.getItems(this.currentPage);
   });
  }

  getItems(page) {
    this.gridservices.getData(page)
      .subscribe(items => {this.items = items; } );
  }

  populate(data) {
    this.items = data.result;
    this.columns = data.columns;
  }

  view(selectedItem: any[]) {
    console.log(selectedItem);
    this.router.navigate([`/manage/${this.currentPage}/${selectedItem}`]);
  }

  edit(selectedItem: any[]) {
    console.log('selected');
    console.log(selectedItem);
    this.router.navigate([`/manage/${this.currentPage}/${selectedItem}`]);

  }

  addnew() {
    console.log(this.currentPage);
    this.router.navigate([`/manage/${this.currentPage}`]);
  }

  delete(selectedItem: any[]) {
    console.log(selectedItem);
    this.httpClient.delete(`${this.url}/${this.currentPage}/${selectedItem}` )
    .subscribe(ts => console.log(ts));

  }

}
export interface DataTable {
  columns: any [];
  result: any [];
}
