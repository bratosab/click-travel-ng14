import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketContainerComponent } from './ticket-container.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: ':code',
    component: TicketsComponent,
  },
];
const routes2: Routes = [
  { path: ':code', component: TicketsComponent },

  {
    path: '',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes2)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
