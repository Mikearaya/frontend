import { TestBed, inject } from '@angular/core/testing';

import { GuardianService } from './guardian.service';

describe('GuardianService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardianService]
    });
  });

  it('should be created', inject([GuardianService], (service: GuardianService) => {
    expect(service).toBeTruthy();
  }));
});
