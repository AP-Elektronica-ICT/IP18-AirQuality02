import { TestBed, inject } from '@angular/core/testing';

import { AirQualityDataService } from './air-quality-data.service';

describe('AirQualityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirQualityDataService]
    });
  });

  it('should be created', inject([AirQualityDataService], (service: AirQualityDataService) => {
    expect(service).toBeTruthy();
  }));
});
