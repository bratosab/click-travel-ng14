// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ClickTravelService } from './click-travel.service';
import { Ticket } from './models/tickets.interface';

describe('ClickTravelService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ClickTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ClickTravelService ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ClickTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.getTickets', () => {
    const testData: Ticket[] = [{"passenger":"Sabrina Kavanagh","flight":"AF 126","from":"CDG","to":"BOB","class":"First class","gate":"B","time":"21Feb 14:08","seat":"23A","number":4},{"passenger":"Sabrina Kavanagh","flight":"AF 226","from":"LYS","to":"BOB","class":"First class","gate":"B","time":"21Feb 14:08","seat":"23A","number":4}];
  
    // Make an HTTP GET request
    httpClient.get<Ticket[]>(service.baseUrl + '/tickets')
      .subscribe(data =>
        expect(data).toEqual(testData)
      );

    const req = httpTestingController.expectOne(service.baseUrl + '/tickets');
  
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
  
});
