import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from './models/destination.interface';
import { Ticket } from './models/tickets.interface';

@Injectable({
  providedIn: 'root',
})
export class ClickTravelService {
  baseUrl = 'https://travel-api.clicksomeone.com';

  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http.get<Destination[]>(`${this.baseUrl}/destinations`);
  }

  getTickets(destCode: string) {
    const params = new HttpParams().set(
      'filter',
      JSON.stringify({ where: { to: destCode } })
    );
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`, { params });
  }
}
