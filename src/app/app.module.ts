import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TicketsComponent } from './tickets/tickets.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { BoardingPassComponent } from './boarding-pass/boarding-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TicketsComponent,
    DestinationsComponent,
    BoardingPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToggleButtonModule,
    TableModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
