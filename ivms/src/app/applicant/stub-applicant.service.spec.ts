import { TestBed, inject } from '@angular/core/testing';

import { StubApplicantService } from './stub-applicant.service';

describe('StubApplicantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StubApplicantService]
    });
  });

  it('should be created', inject([StubApplicantService], (service: StubApplicantService) => {
    expect(service).toBeTruthy();
  }));
});
