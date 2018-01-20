/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarddemoComponent } from './carddemo.component';

describe('CarddemoComponent', () => {
  let component: CarddemoComponent;
  let fixture: ComponentFixture<CarddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
