import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Destination } from './models/destination.interface';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>('https://travel-api.clicksomeone.com/destinations')
  }

  getDreamDestinations() {
    return this.getDestinations()
    .pipe(
      map((destinations) =>
        destinations.filter((dest) => dest.isDreamDestination)
      )
    )
  }
}
