import { TestBed } from '@angular/core/testing';

import { CarroCadastradoService } from './carro-cadastrado.service';

describe('CarroCadastradoService', () => {
  let service: CarroCadastradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroCadastradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
