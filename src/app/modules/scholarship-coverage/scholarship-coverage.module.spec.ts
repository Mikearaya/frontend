import { ScholarshipCoverageModule } from './scholarship-coverage.module';

describe('ScholarshipCoverageModule', () => {
  let scholarshipCoverageModule: ScholarshipCoverageModule;

  beforeEach(() => {
    scholarshipCoverageModule = new ScholarshipCoverageModule();
  });

  it('should create an instance', () => {
    expect(scholarshipCoverageModule).toBeTruthy();
  });
});
