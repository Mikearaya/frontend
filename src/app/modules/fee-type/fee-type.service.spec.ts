import { TestBed, inject } from '@angular/core/testing';

import { FeeTypeService } from './fee-type.service';

describe('FeeTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeTypeService]
    });
  });

  it('should be created', inject([FeeTypeService], (service: FeeTypeService) => {
    expect(service).toBeTruthy();
  }));
});
