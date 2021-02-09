import { TestBed } from '@angular/core/testing';

import { LoginFacebookService } from './login-facebook.service';

describe('LoginFacebookService', () => {
  let service: LoginFacebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFacebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
