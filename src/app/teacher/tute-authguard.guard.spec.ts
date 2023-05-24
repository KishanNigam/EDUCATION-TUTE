import { TestBed } from '@angular/core/testing';

import { TuteAuthguardGuard } from './tute-authguard.guard';

describe('TuteAuthguardGuard', () => {
  let guard: TuteAuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TuteAuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
