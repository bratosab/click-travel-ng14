import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Destination } from './models/destination.interface';
import { Ticket } from './models/tickets.interface';

@Injectable()
export class ClickTravelService {
  baseUrl = 'https://travel-api.clicksomeone.com';

  constructor(private http: HttpClient) {}

  getDestinations(params?: HttpParams): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.baseUrl}/destinations`, {
      params,
    });
  }

  getTickets(destCode: string) {
    const params = new HttpParams().set(
      'filter',
      JSON.stringify({ where: { to: destCode } })
    );
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`, { params });
  }

  addDestination(destination: Destination): Observable<Destination | null> {
    return this.http
      .post<Destination>(`${this.baseUrl}/destinations`, destination)
      .pipe(
        catchError((error) => {
          console.log(error); // TODO: Log error using a service
          return of(null);
        })
      );
  }
}
