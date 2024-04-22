import { TestBed } from '@angular/core/testing';

import { BrahmiUploadService } from './brahmi-upload.service';

describe('BrahmiUploadService', () => {
  let service: BrahmiUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrahmiUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
