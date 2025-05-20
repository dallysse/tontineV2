import { TestBed } from '@angular/core/testing';

import { AidesServiceService } from './aides-service.service';

describe('AidesServiceService', () => {
  let service: AidesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AidesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
