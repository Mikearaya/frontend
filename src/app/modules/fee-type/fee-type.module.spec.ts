import { FeeTypeModule } from './fee-type.module';

describe('FeeTypeModule', () => {
  let feeTypeModule: FeeTypeModule;

  beforeEach(() => {
    feeTypeModule = new FeeTypeModule();
  });

  it('should create an instance', () => {
    expect(feeTypeModule).toBeTruthy();
  });
});
