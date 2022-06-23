import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { DestinationsComponent } from './destinations/destinations.component';
import { ClickTravelService } from './click-travel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';x

@NgModule({
  declarations: [AppComponent, LogoComponent, DestinationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    ToggleButtonModule,
  ],
  providers: [ClickTravelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
