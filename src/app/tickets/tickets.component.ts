import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClickTravelService } from '../click-travel.service';
import { Ticket } from '../models/ticket.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit, OnDestroy {
  // tickets!: Ticket[];
  tickets$ !: Observable<Ticket[]>;
  subscription!: Subscription

  constructor(
    private route: ActivatedRoute,
    private clickTravelService: ClickTravelService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');

    if (code) {
      this.subscription = this.clickTravelService.getTickets(code).subscribe(tickets => {
        //this.tickets = tickets;
      })

      this.tickets$ = this.clickTravelService.getTickets(code);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
