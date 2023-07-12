import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Destination } from './models/destination.model';
import { Observable } from 'rxjs';


@Injectable()
export class ClickTravelService {
  readonly travelApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.travelApi}/destinations`)
  }
}
