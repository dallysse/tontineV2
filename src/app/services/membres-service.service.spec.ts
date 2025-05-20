import { TestBed } from '@angular/core/testing';

import { MembresServiceService } from './membres-service.service';

describe('MembresServiceService', () => {
  let service: MembresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
