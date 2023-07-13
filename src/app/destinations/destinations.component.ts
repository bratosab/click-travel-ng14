import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../click-travel.service';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {
  private allDestinations!: Destination[];
  destinations!: Destination[];
  loading = false;

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit(): void {
    this.clickTravelService.getDestinations().subscribe((destinations) => {
      this.allDestinations = destinations;

      this.filterDestinations(true);
    });
  }

  private filterDestinations(isDreamDestination: boolean) {
    this.destinations = isDreamDestination
      ? this.allDestinations.filter((dest) => dest.isDreamDestination)
      : this.allDestinations;
  }

  setLoading() {
    this.loading = true;
  }
  
  handleDestFilterChange(value: string) {
    this.filterDestinations(value === 'dream');
  }
}
