import { Component, OnInit } from '@angular/core';
import { Destination } from './models/destination.model';
import { ClickTravelService } from './click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  destinations!: Destination[];

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit() {
    this.clickTravelService.getDestinations().subscribe((result) => {
      this.destinations = result.filter(destination => destination.isDreamDestination);
    });
  }
}
