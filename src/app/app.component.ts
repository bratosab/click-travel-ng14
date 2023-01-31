import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith, switchMap, tap, timer } from 'rxjs';
import { Destination } from './models/destination.interface';
import { ClickTravelService } from './providers/click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';

  filteredDestinations$!: Observable<Destination[]>;
  isDreamDestination = new FormControl(false);

  constructor(private travelService: ClickTravelService) {}

  ngOnInit() {
    this.filteredDestinations$ = this.isDreamDestination.valueChanges.pipe(
      startWith(this.isDreamDestination.value),
      switchMap((isDreamDestination) => {
        return this.travelService.destinations$.pipe(
          map((destinations) => {
            return destinations.filter((dest) => dest.isDreamDestination === isDreamDestination);
          })
        )
      })
    )

    this.travelService.getDestinations().subscribe()
  }
}
