import { TestBed } from '@angular/core/testing';

import { CardInformationService } from './card-information.service';

describe('CardInformationService', () => {
  let service: CardInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
