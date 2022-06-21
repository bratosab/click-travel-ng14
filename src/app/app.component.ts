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
  destinations: Destination[] = [];

  constructor(private travelService: ClickTravelService) {}

  ngOnInit() {
    this.travelService
      .getDestinations()
      .pipe(
        map((dest) => {
          return dest.filter((d) => d.isDreamDestination);
        })
      )
      .subscribe((destinations) => {
        this.destinations = destinations;
      });
  }
}
