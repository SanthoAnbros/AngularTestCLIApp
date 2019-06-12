import { TestBed } from '@angular/core/testing';

import { XlservicesService } from './xlservices.service';

describe('XlservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XlservicesService = TestBed.get(XlservicesService);
    expect(service).toBeTruthy();
  });
});
