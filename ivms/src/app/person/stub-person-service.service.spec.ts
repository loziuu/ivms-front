import { TestBed, inject } from '@angular/core/testing';

import { StubPersonService } from './stub-person-service.service';

describe('StubPersonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StubPersonService]
    });
  });

  it('should be created', inject([StubPersonService], (service: StubPersonService) => {
    expect(service).toBeTruthy();
  }));
});
