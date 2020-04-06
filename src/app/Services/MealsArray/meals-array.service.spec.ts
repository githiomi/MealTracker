import { TestBed } from '@angular/core/testing';

import { MealsArrayService } from './meals-array.service';

describe('MealsArrayService', () => {
  let service: MealsArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
