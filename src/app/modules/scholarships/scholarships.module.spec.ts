import { ScholarshipsModule } from './scholarships.module';

describe('ScholarshipsModule', () => {
  let scholarshipsModule: ScholarshipsModule;

  beforeEach(() => {
    scholarshipsModule = new ScholarshipsModule();
  });

  it('should create an instance', () => {
    expect(scholarshipsModule).toBeTruthy();
  });
});
