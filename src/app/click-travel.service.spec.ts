import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.model';

describe('ClickTravelService', () => {
  let service: ClickTravelService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClickTravelService]
    });
    service = TestBed.inject(ClickTravelService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getDestinations() returns a list of Destinations', (done) => {
    const destinationsMock: Destination[] = [{ code: 'DBO', name: 'Bordeaux', weather: 'Sunny', isDreamDestination: true }];

    service.getDestinations().subscribe(destinations => {
      expect(destinations).toEqual(destinationsMock)
      done()
    })

    const req = httpTestingController.expectOne(`${service.travelApi}/destinations`);
    expect(req.request.method).toEqual('GET');
     req.flush(destinationsMock);

  })
});
