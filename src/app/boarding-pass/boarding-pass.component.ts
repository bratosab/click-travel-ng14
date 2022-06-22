import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ticket } from '../models/tickets.interface';

@Component({
  selector: 'app-boarding-pass',
  templateUrl: './boarding-pass.component.html',
  styleUrls: ['./boarding-pass.component.scss'],
})
export class BoardingPassComponent implements OnChanges {
  boarding: string;
  departure: string;
  duration: string;
  arrival: string;

  private _ticket: Ticket;
  @Input() 
  set ticket(value: Ticket) {
    this._ticket = value;
    this.calculateTimes();
  }
  get ticket(): Ticket {
    return this._ticket;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }


  private calculateTimes() {
    console.log('calculateTimes')
    const departureDate = new Date(this.ticket.time);
    this.boarding = '';
    this.departure = departureDate.toLocaleString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    this.duration = '';
    this.arrival = '';
  }
}
