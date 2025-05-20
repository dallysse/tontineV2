import { TestBed } from '@angular/core/testing';

import { ReunionsServiceService } from './reunions-service.service';

describe('ReunionsServiceService', () => {
  let service: ReunionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReunionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
