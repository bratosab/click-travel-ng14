import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../models/tickets.interface';

@Component({
  selector: 'app-boarding-pass',
  templateUrl: './boarding-pass.component.html',
  styleUrls: ['./boarding-pass.component.scss']
})
export class BoardingPassComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

}
