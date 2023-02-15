import { TestBed } from '@angular/core/testing';

import { TipocomentarioService } from './tipocomentario.service';

describe('TipocomentarioService', () => {
  let service: TipocomentarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipocomentarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
