import { SubjectModule } from './subject.module';

describe('SubjectModule', () => {
  let subjectModule: SubjectModule;

  beforeEach(() => {
    subjectModule = new SubjectModule();
  });

  it('should create an instance', () => {
    expect(subjectModule).toBeTruthy();
  });
});
