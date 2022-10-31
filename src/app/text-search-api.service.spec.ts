import { TestBed } from '@angular/core/testing';

import { TextSearchApiService } from './text-search-api.service';

describe('TextSearchApiService', () => {
  let service: TextSearchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSearchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
