import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../click-travel.service';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {
  destinations!: Destination[];
  private allDestinations!: Destination[];

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit() {
    this.clickTravelService.getDestinations().subscribe((result) => {
      this.allDestinations = result;
      this.filterDestinations(true);
    });
  }

  filterDestinations(isDreamDestination: boolean) {
    this.destinations = this.allDestinations.filter((destination) =>
      isDreamDestination ? destination.isDreamDestination : true
    );
  }
}
