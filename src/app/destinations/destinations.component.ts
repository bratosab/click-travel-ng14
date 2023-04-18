import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../click-travel.service';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  title = 'Choose your dream destination...';
  private allDestinations!: Destination[];
  destinations!: Destination[];
  isLoading = true;

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit(): void {
    this.clickTravelService.getDestinations().subscribe((result) => {
      this.allDestinations = result;
      this.filterDestinations(true);
      this.isLoading = false;
    });
  }

  filterDestinations(isDreamDest: boolean): void {
    this.destinations = this.allDestinations.filter((destination) => {
      return isDreamDest ? destination.isDreamDestination : true
    });
  }

}
