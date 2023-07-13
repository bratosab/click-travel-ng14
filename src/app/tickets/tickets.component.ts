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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ tickets }) => {
      this.tickets = tickets as Ticket[];
    });
  }
}
