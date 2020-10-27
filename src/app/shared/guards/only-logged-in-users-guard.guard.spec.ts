import { TestBed } from '@angular/core/testing';

import { OnlyLoggedInUsersGuardGuard } from './only-logged-in-users-guard.guard';

describe('OnlyLoggedInUsersGuardGuard', () => {
  let guard: OnlyLoggedInUsersGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyLoggedInUsersGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
