import { EnrollmentModule } from './enrollment.module';

describe('EnrollmentModule', () => {
  let enrollmentModule: EnrollmentModule;

  beforeEach(() => {
    enrollmentModule = new EnrollmentModule();
  });

  it('should create an instance', () => {
    expect(enrollmentModule).toBeTruthy();
  });
});
