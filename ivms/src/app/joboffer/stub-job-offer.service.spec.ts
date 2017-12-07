import { TestBed, inject } from '@angular/core/testing';

import { StubJobOfferService } from './stub-job-offer.service';

describe('StubJobOfferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StubJobOfferService]
    });
  });

  it('should be created', inject([StubJobOfferService], (service: StubJobOfferService) => {
    expect(service).toBeTruthy();
  }));
});
