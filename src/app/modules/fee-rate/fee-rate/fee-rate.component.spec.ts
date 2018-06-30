import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeRateComponent } from './fee-rate.component';

describe('FeeRateComponent', () => {
  let component: FeeRateComponent;
  let fixture: ComponentFixture<FeeRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
