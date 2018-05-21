/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabdemoComponent } from './tabdemo.component';

describe('TabdemoComponent', () => {
  let component: TabdemoComponent;
  let fixture: ComponentFixture<TabdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
