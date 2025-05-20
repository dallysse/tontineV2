import { TestBed } from '@angular/core/testing';

import { CollationsServiceService } from './collations-service.service';

describe('CollationsServiceService', () => {
  let service: CollationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
