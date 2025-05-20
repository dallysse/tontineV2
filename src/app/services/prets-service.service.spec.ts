import { TestBed } from '@angular/core/testing';

import { PretsServiceService } from './prets-service.service';

describe('PretsServiceService', () => {
  let service: PretsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PretsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
