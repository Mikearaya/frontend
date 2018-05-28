import { Component, OnInit } from '@angular/core';
import { ItemsServices} from './services/items.services';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  spinner = false;
  private datas: any[];
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/grid', icon: 'list', label: 'grid'},
    { path: '/other', icon: 'view_quilt', label: 'Other'},
    { path: '/http', icon: 'face', label: 'Http'}
  ];

  constructor (private items: ItemsServices, private route: ActivatedRoute) {
  }
  spin(x: any[]) {
    console.log('spin');
    console.log(x);
    this.spinner = true;
  }
  ngOnInit() {
    // this.items.getData('1').subscribe(data => this.datas = data);

  }
}
