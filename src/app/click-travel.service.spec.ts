import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.model';

describe('ClickTravelService', () => {
  let service: ClickTravelService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClickTravelService],
    });
    service = TestBed.inject(ClickTravelService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test service.getDestionations', () => {
    const testData: Destination[] = [
      { name: 'test', code: 'TES', weather: 'Nice', isDreamDestination: false },
    ];

    service.getDestinations().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpController.expectOne(service.baseUrl + '/destinations')

    expect(req.request.method).toEqual('GET');
    req.flush(testData)
  });
});
