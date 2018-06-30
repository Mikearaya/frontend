import { FeeRateModule } from './fee-rate.module';

describe('FeeRateModule', () => {
  let feeRateModule: FeeRateModule;

  beforeEach(() => {
    feeRateModule = new FeeRateModule();
  });

  it('should create an instance', () => {
    expect(feeRateModule).toBeTruthy();
  });
});
