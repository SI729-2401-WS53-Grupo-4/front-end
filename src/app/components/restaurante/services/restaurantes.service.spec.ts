import { TestBed } from '@angular/core/testing';

import { RestaurantsService } from './restaurantes.service';

describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
