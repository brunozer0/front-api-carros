import { TestBed } from '@angular/core/testing';

import { ConcessionariaService } from './concessionaria.service';

describe('ConcessionariaService', () => {
  let service: ConcessionariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcessionariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
