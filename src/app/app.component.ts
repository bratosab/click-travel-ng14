import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  destinations!: Destination[];
  allDestinations!: Destination[];
  title = 'Choose your dream destination...';
  isDreamDestination: boolean = true;

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit(): void {
    this.clickTravelService
      .getDestinations()
      .subscribe((dests) => (this.allDestinations = dests));
  }

  filterDestinations() {
    this.destinations = this.allDestinations.filter(dest => this.isDreamDestination ? dest.isDreamDestination : true)
  }
}
