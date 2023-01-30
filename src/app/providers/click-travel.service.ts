import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Destination } from '../models/destination.interface';

@Injectable()
export class ClickTravelService {

  private readonly baseURL : string = 'https://travel-api.clicksomeone.com'

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.baseURL}/destinations`)
  }

  getDreamDestinations() {
    return this.getDestinations().pipe(
      map(destinations => {
        return destinations.filter((dest) => dest.isDreamDestination)
      })
    )
  }

}
