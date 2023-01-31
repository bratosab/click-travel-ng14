import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Destination } from '../models/destination.interface';

@Injectable()
export class ClickTravelService {
  private readonly baseURL: string = 'https://travel-api.clicksomeone.com';
  public destinations$ = new BehaviorSubject<Destination[]>([]);

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http
      .get<Destination[]>(`${this.baseURL}/destinations`)
      .pipe(
        tap((destinations) => this.destinations$.next(destinations))
      );
  }

}
