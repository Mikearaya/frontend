import { GuardianModule } from './guardian.module';

describe('GuardianModule', () => {
  let guardianModule: GuardianModule;

  beforeEach(() => {
    guardianModule = new GuardianModule();
  });

  it('should create an instance', () => {
    expect(guardianModule).toBeTruthy();
  });
});
