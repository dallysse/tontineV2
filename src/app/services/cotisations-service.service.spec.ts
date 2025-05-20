import { TestBed } from '@angular/core/testing';

import { CotisationsServiceService } from './cotisations-service.service';

describe('CotisationsServiceService', () => {
  let service: CotisationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotisationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
