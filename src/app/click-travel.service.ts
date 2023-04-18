import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from './models/destination.model';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {
  readonly baseUrl = 'https://travel-api.clicksomeone.com'

  constructor(private http: HttpClient) { }

  getDestinations() {
   return this.http.get<Destination[]>(`${this.baseUrl}/destinations`)
  }
}
