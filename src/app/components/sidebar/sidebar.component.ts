import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', icon: 'home', title: 'Home'},
  { path: '/data/subjects', icon: 'book', title: 'Subjects'},
  { path: '/data/courses', icon: 'library_books', title: 'Course'},
  { path: '/data/feetype', icon: 'monetization_on', title: 'Fee Type'},
  { path: '/data/feerate', icon: 'extension', title: 'Fee Rate'},
  { path: '/data/students', icon: 'face', title: 'Students'},
  { path: '/data/enrollments', icon: 'assignment_ind', title: 'Enrolment'},
  { path: '/data/employee', icon: 'people', title: 'Employees'},
  { path: '/data/events', icon: 'event', title: 'Events'},
  { path: '/data/scholarships', icon: 'school', title: 'Scholarship'},
  { path: '/data/scholarship_type', icon: 'money', title: 'Scholarship Type'},
  { path: '/data/users', icon: 'people', title: 'User'}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
}
