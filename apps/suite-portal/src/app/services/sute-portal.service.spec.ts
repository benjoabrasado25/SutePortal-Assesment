import { TestBed } from '@angular/core/testing';

import { SutePortalService } from './sute-portal.service';

describe('SutePortalService', () => {
  let service: SutePortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SutePortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
