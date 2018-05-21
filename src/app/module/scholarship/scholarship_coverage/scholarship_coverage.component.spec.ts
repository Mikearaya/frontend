/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Scholarship_coverageComponent } from './scholarship_coverage.component';

describe('Scholarship_coverageComponent', () => {
  let component: Scholarship_coverageComponent;
  let fixture: ComponentFixture<Scholarship_coverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scholarship_coverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scholarship_coverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
