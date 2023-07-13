import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClickTravelService } from './click-travel.service';
import { Ticket } from './models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsDataResolver implements Resolve<Ticket[]> {
  constructor(private clickTravelService: ClickTravelService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Ticket[]> {
    const code = route.paramMap.get('code');

    if (code) {
      return this.clickTravelService.getTickets({ code });
    } else {
      return of([]);
    }
  }
}
