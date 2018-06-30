import { TestBed, inject } from '@angular/core/testing';

import { FeeRateService } from './fee-rate.service';

describe('FeeRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeRateService]
    });
  });

  it('should be created', inject([FeeRateService], (service: FeeRateService) => {
    expect(service).toBeTruthy();
  }));
});
