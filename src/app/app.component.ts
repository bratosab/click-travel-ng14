import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  private destinations: Destination[] = [];
  filteredDestinations: Destination[] = [];
  showDreamDestination: boolean = true;

  constructor(private travelService: ClickTravelService) {}

  ngOnInit() {
    this.travelService
      .getDestinations()
      .subscribe((destinations) => {
        this.destinations = destinations;
        this.filterDestinations()
      });
  }

  filterDestinations() {
    this.filteredDestinations = this.destinations.filter(
      (d) => this.showDreamDestination ? d.isDreamDestination : true
    );
  }
}
