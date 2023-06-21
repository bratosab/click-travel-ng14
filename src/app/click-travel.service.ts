import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Destination } from './models/destination.model';
import { Observable } from 'rxjs';
import { Ticket } from './models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class ClickTravelService {
  readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.baseUrl}/destinations`);
  }

  getTickets(codeDestination: string): Observable<Ticket[]> {
    const filterObject = JSON.stringify({
      where: { to: codeDestination },
    });

    const params: HttpParams = new HttpParams().set('filter', filterObject);

    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`, { params })
  }
}
