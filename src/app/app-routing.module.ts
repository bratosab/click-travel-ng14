import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';

const routes: Routes = [
  { path: '', component: DestinationsComponent },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./ticket/ticket.module').then((m) => m.TicketModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
