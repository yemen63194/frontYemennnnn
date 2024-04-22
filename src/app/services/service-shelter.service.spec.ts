import { TestBed } from '@angular/core/testing';

import { ServiceShelterService } from './service-shelter.service';

describe('ServiceShelterService', () => {
  let service: ServiceShelterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceShelterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
