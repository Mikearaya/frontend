import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFromComponent } from './course-from.component';

describe('CourseFromComponent', () => {
  let component: CourseFromComponent;
  let fixture: ComponentFixture<CourseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
