import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClickTravelService } from '../click-travel.service';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  tickets$!: Observable<Ticket[]>;
  displayedColumns: string[] = ['number', 'passenger', 'from', 'to' ]

  constructor(
    private clickTravelService: ClickTravelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const destCode = this.route.snapshot.paramMap.get('code');

    if (!!destCode) {
      this.tickets$ = this.clickTravelService.getTickets(destCode);
    }
  }
}
