import { TestBed } from '@angular/core/testing';

import { FlashMessageServiceService } from './flash-message-service.service';

describe('FlashMessageServiceService', () => {
  let service: FlashMessageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashMessageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
