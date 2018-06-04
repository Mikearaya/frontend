import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianFormComponent } from './guardian-form.component';

describe('GuardianFormComponent', () => {
  let component: GuardianFormComponent;
  let fixture: ComponentFixture<GuardianFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardianFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
