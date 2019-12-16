import { TestBed } from '@angular/core/testing';

import { MyFirstService } from './my-first.service';

describe('MyFirstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFirstService = TestBed.get(MyFirstService);
    expect(service).toBeTruthy();
  });
});
