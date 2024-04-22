import { TestBed } from '@angular/core/testing';

import { AideService } from './aide.service';

describe('AideService', () => {
  let service: AideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
