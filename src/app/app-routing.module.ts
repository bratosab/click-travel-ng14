import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AdminGuard } from './guards/admin.guard';
import { TicketsDataResolver } from './tickets-data.resolver';

const routes: Routes = [
  { path: '', component: DestinationsComponent },
  { path: 'tickets/:code', resolve: { tickets: TicketsDataResolver }, component: TicketsComponent },
  { path: 'admin', canActivate: [AdminGuard], loadChildren: () =>  import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
