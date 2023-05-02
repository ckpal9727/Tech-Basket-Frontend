import { TestBed } from '@angular/core/testing';

import { UserActionServiceService } from './user-action-service.service';

describe('UserActionServiceService', () => {
  let service: UserActionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserActionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
