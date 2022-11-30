/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CadastrosService } from './cadastros.service';

describe('Service: Cadastros', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastrosService]
    });
  });

  it('should ...', inject([CadastrosService], (service: CadastrosService) => {
    expect(service).toBeTruthy();
  }));
});
