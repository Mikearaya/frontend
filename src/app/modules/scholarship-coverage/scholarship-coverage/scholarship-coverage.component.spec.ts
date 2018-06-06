import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipCoverageComponent } from './scholarship-coverage.component';

describe('ScholarshipCoverageComponent', () => {
  let component: ScholarshipCoverageComponent;
  let fixture: ComponentFixture<ScholarshipCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
