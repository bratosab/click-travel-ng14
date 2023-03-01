import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  filter,
  map,
  Observable,
  startWith,
  Subscription,
} from 'rxjs';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  destinations!: Observable<Destination[]>;
  title = 'Choose your dream destination...';
  isDreamDestinationForm = new FormControl(false);

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit(): void {
    this.destinations = combineLatest([
      this.clickTravelService.getDestinations(),
      this.isDreamDestinationForm.valueChanges.pipe(startWith(false)),
    ]).pipe(
      map(([destinations, isDreamDestination]) =>
        destinations.filter((dest) =>
          isDreamDestination ? dest.isDreamDestination : true
        )
      )
    );
  }
}
