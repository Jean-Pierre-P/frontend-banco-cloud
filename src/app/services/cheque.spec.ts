import { TestBed } from '@angular/core/testing';
import { Cheque } from './cheque';

describe('Cheque', () => {
  let service: Cheque;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cheque);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
