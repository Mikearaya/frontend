import { TestBed, inject } from '@angular/core/testing';

import { ScholarshipTypeService } from './scholarship-type.service';

describe('ScholarshipTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScholarshipTypeService]
    });
  });

  it('should be created', inject([ScholarshipTypeService], (service: ScholarshipTypeService) => {
    expect(service).toBeTruthy();
  }));
});
