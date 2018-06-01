import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuardianComponent } from './student-guardian.component';

describe('StudentGuardianComponent', () => {
  let component: StudentGuardianComponent;
  let fixture: ComponentFixture<StudentGuardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGuardianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
