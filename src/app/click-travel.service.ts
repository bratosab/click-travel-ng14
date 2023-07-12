import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Destination } from './models/destination.model';
import { Observable } from 'rxjs';
import { Ticket } from './models/ticket.model';


@Injectable()
export class ClickTravelService {
  readonly travelApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.travelApi}/destinations`)
  }

  getTickets({ code }: Pick<Destination, 'code'>) {
    const filterObject = JSON.stringify({
      where: { to: code }
    })

    const params: HttpParams = new HttpParams().set('filter', filterObject)

    return this.http.get<Ticket[]>(`${this.travelApi}/tickets`, { params })
  }
}
