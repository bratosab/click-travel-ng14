import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Destination } from './models/destination.model';
import { Ticket } from './models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class ClickTravelService {
  readonly baseUrl = 'https://travel-api.clicksomeone.com';

  constructor(private http: HttpClient) {}

  getDestinations(params?: HttpParams) {
    return this.http.get<Destination[]>(`${this.baseUrl}/destinations`, {
      params,
    });
  }

  getTickets(destinationCode: string) {
    const filterObject = JSON.stringify({ where: { to: destinationCode } });
    const params: HttpParams = new HttpParams().set('filter', filterObject);

    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`, {
      params: params,
    });
  }

  addDestination(destination: Destination) {
    return this.http
      .post<Destination>(`${this.baseUrl}/destinations`, destination)
      .pipe(
        catchError((error) => {
          console.error('Erreur gérée :', error);
          throw error;
        })
      );
  }
}
