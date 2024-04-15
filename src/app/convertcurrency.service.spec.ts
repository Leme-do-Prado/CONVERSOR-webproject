import { TestBed } from '@angular/core/testing';

import { ConvertcurrencyService } from './convertcurrency.service';

describe('ConvertcurrencyService', () => {
  let service: ConvertcurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertcurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
