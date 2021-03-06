import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus: any[];
  reports: any[];

      constructor () {}

  ngOnInit() {
    this.menus = MENU_ITEM;
    this.reports = REPORTS;
  }

}

const MENU_ITEM = [
  { path: '/home', icon: 'home', label: 'Home'},
  { path: '/data/subjects', icon: 'book', label: 'Subjects'},
  { path: '/data/courses', icon: 'library_books', label: 'Course'},
  { path: '/data/feetype', icon: 'monetization_on', label: 'Fee Type'},
  { path: '/data/feerate', icon: 'extension', label: 'Fee Rate'},
  { path: '/data/students', icon: 'face', label: 'Students'},
  { path: '/data/enrollments', icon: 'assignment_ind', label: 'Enrolment'},
  { path: '/data/employee', icon: 'people', label: 'Employees'},
  { path: '/data/events', icon: 'event', label: 'Events'},
  { path: '/data/scholarships', icon: 'school', label: 'Scholarship'},
  { path: '/data/scholarship_type', icon: 'money', label: 'Scholarship Type'},
  { path: '/data/users', icon: 'people', label: 'User'}
];

const REPORTS = [
  { path: '/data/subjects', icon: 'book', label: 'Subjects'},
  { path: '/data/courses', icon: 'library_books', label: 'Course'},
  { path: '/data/feetype', icon: 'monetization_on', label: 'Fee Type'},
  { path: '/data/feerate', icon: 'extension', label: 'Fee Rate'},
  { path: '/data/students', icon: 'face', label: 'Students'},
];
