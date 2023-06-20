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
  private allDestinations!: Destination[];

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit() {
    this.clickTravelService.getDestinations().subscribe((result) => {
      this.allDestinations = result;
      this.filterDestinations(true)
    });
  }

  filterDestinations(isDreamDestination: boolean) {
    this.destinations = this.allDestinations.filter((destination) =>
      isDreamDestination ? destination.isDreamDestination : true
    );
  }
}
