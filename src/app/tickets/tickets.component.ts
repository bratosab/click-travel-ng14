import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../click-travel.service';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../models/destination.model';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(
    private clickTravelService: ClickTravelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');

    if (code) {
      this.clickTravelService.getTickets({ code }).subscribe((tickets) => {
        this.tickets = tickets;
      });
    }
  }
}
