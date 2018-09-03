import { TestBed, inject } from '@angular/core/testing';

import { CardsService } from './cards.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService]
    });
  });

  it('should be created', inject([CardsService], (service: CardsService) => {
    expect(service).toBeTruthy();
  }));
});
