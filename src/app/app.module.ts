import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ClickTravelService } from './providers/click-travel.service';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    ToggleButtonModule
  ],
  providers: [ClickTravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
