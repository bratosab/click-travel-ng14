import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Destination } from './models/destination.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClickTravelService {
  readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.baseUrl}/destinations`);
  }
}
