import { TestBed } from '@angular/core/testing';

import { ReglesServiceService } from './regles-service.service';

describe('ReglesServiceService', () => {
  let service: ReglesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
