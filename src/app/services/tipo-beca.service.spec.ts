import { TestBed } from '@angular/core/testing';

import { TipoBecaService } from './tipo-beca.service';

describe('TipoBecaService', () => {
  let service: TipoBecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoBecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
