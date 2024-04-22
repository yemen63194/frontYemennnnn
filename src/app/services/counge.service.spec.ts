import { TestBed } from '@angular/core/testing';

import { CoungeService } from './counge.service';

describe('CoungeService', () => {
  let service: CoungeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoungeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
