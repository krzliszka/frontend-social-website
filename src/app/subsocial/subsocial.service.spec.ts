import { TestBed } from '@angular/core/testing';

import { SubsocialService } from './subsocial.service';

describe('SubsocialService', () => {
  let service: SubsocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
