import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Destination } from './models/destination.interface';

@Injectable()
export class ClickTravelService {
  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http
      .get<Destination[]>('https://travel-api.clicksomeone.com/destinations')
      .pipe(
        map((destinations) => {
          return destinations.filter((dest) => dest.isDreamDestination);
        })
      );
  }
}
