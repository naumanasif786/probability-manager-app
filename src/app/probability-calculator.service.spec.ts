import { TestBed } from '@angular/core/testing';

import { ProbabilityCalculatorService } from './probability-calculator.service';

describe('ProbabilityCalculatorService', () => {
  let service: ProbabilityCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbabilityCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
