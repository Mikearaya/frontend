import { TestBed, inject } from '@angular/core/testing';

import { ScholarshipsService } from './scholarships.service';

describe('ScholarshipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScholarshipsService]
    });
  });

  it('should be created', inject([ScholarshipsService], (service: ScholarshipsService) => {
    expect(service).toBeTruthy();
  }));
});
