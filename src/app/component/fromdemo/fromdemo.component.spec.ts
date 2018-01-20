/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FromdemoComponent } from './fromdemo.component';

describe('FromdemoComponent', () => {
  let component: FromdemoComponent;
  let fixture: ComponentFixture<FromdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
