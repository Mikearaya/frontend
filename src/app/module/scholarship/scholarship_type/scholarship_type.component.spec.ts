/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Scholarship_typeComponent } from './scholarship_type.component';

describe('Scholarship_typeComponent', () => {
  let component: Scholarship_typeComponent;
  let fixture: ComponentFixture<Scholarship_typeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scholarship_typeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scholarship_typeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
