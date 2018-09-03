import { TestBed, inject } from '@angular/core/testing';

import { ChargesService } from './charges.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChargesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChargesService]
    });
  });

  it('should be created', inject(
    [ChargesService],
    (service: ChargesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
