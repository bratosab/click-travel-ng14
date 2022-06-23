import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { BoardingPassComponent } from './boarding-pass/boarding-pass.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TicketContainerComponent } from './ticket-container.component';

@NgModule({
  declarations: [TicketContainerComponent, TicketsComponent, BoardingPassComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    TableModule,
    DialogModule,
  ]
})
export class TicketModule { }
