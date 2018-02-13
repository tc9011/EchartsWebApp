import { TestBed, inject } from '@angular/core/testing';

import { CheckHomepageService } from './check-homepage.service';

describe('CheckHomepageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckHomepageService]
    });
  });

  it('should be created', inject([CheckHomepageService], (service: CheckHomepageService) => {
    expect(service).toBeTruthy();
  }));
});
