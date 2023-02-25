import { TestBed } from '@angular/core/testing';

import SlidesImagesService from './slides-images.service';

describe('SlidesImagesService', () => {
  let service: SlidesImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidesImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
