import { TestBed } from '@angular/core/testing';

import { MfeLookupService } from './mfe-lookup.service';

describe('MfeLookupService', () => {
  let service: MfeLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
