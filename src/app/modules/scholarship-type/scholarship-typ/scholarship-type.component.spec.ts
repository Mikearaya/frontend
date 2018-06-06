import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipTypeComponent } from './scholarship-type.component';

describe('ScholarshipTypeComponent', () => {
  let component: ScholarshipTypeComponent;
  let fixture: ComponentFixture<ScholarshipTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
