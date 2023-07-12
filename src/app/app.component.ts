import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  // destinations!: Destination[];
  destinations$!: Observable<Destination[]>;

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit(): void {
    // this.clickTravelService.getDestinations().subscribe(destinations => {
    //   this.destinations = destinations.filter(dest => dest.isDreamDestination)
    // })

    this.destinations$ = this.clickTravelService
      .getDestinations()
      .pipe(
        map((destinations) =>
          destinations.filter((dest) => dest.isDreamDestination)
        )
      );
  }
}
