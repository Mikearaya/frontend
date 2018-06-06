import { ScholarshipTypeModule } from './scholarship-type.module';

describe('ScholarshipTypeModule', () => {
  let scholarshipTypeModule: ScholarshipTypeModule;

  beforeEach(() => {
    scholarshipTypeModule = new ScholarshipTypeModule();
  });

  it('should create an instance', () => {
    expect(scholarshipTypeModule).toBeTruthy();
  });
});
