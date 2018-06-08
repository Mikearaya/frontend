import { TestBed, inject } from '@angular/core/testing';

import { ScholarshipCoverageService } from './scholarship-coverage.service';

describe('ScholarshipCoverageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScholarshipCoverageService]
    });
  });

  it('should be created', inject([ScholarshipCoverageService], (service: ScholarshipCoverageService) => {
    expect(service).toBeTruthy();
  }));
});
