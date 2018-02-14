import { Component, OnInit , AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { GridServices } from '../../services/grid.services';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  items: DataTable;
  private sub: any;
  id: string;
  columns: any;
  lenght: number;

  constructor(private route: ActivatedRoute, private gridservices: GridServices) {}

  ngOnInit() {
    this.lenght = 10;
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.getItems(this.id);
   });
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
