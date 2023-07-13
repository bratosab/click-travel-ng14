import { TestBed } from '@angular/core/testing';

import { TicketsDataResolver } from './tickets-data.resolver';

describe('TicketsDataResolver', () => {
  let resolver: TicketsDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TicketsDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
