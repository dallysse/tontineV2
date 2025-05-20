import { TestBed } from '@angular/core/testing';

import { AmandesServiceService } from './amandes-service.service';

describe('AmandesServiceService', () => {
  let service: AmandesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmandesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
