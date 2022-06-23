import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClickTravelService } from '../../click-travel.service';
import { Ticket } from '../../models/tickets.interface';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  selectedTicket: Ticket;
  displayTicket = false;

  constructor(
    private travelService: ClickTravelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const destCode = this.route.snapshot.paramMap.get('code');
    if (destCode) {
      this.travelService.getTickets(destCode).subscribe((tickets) => {
        this.tickets = tickets;
      });
    } else {
      this.tickets = [];
    }
  }

  selectTicket() {
    this.displayTicket = true
  }
}
