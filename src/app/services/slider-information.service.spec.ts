import { TestBed } from '@angular/core/testing';

import { SliderInformationService } from './slider-information.service';

describe('SliderInformationService', () => {
  let service: SliderInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
