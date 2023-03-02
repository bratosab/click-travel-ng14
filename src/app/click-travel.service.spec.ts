import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ClickTravelService } from './click-travel.service';
import destinationsMock from './mocks/destinations.mock';

describe('ClickTravelService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ClickTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClickTravelService]
    });
    httpClient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ClickTravelService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can fetch destinations from server using getDestinations()', () => {
    service.getDestinations().subscribe(destinations => {
      expect(destinations).toEqual(destinationsMock)
    })

    const test = httpTestingController.expectOne(`${service.baseUrl}/destinations`);

    expect(test.request.method).toEqual('GET')
    test.flush(destinationsMock)
  })
});
