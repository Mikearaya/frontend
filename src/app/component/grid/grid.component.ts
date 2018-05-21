import { Component, OnInit } from '@angular/core';
import { ItemsServices } from '../../services/items.services';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  private datas: any[];
  constructor (private items: ItemsServices) {}

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


  ngOnInit() {
    // this.items.getData('1').subscribe(data => this.datas = data);
  }

}
