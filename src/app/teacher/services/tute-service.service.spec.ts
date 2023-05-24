import { TestBed } from '@angular/core/testing';

import { TuteServiceService } from './tute-service.service';

describe('TuteServiceService', () => {
  let service: TuteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
