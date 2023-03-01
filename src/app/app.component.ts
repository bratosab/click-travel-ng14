import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, filter, map, startWith, Subscription } from 'rxjs';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  destinations!: Destination[];
  title = 'Choose your dream destination...';
  isDreamDestinationForm = new FormControl(false);

  private sub!: Subscription;

  constructor(private clickTravelService: ClickTravelService) {}
 

  ngOnInit(): void {
    this.sub = combineLatest([
      this.clickTravelService.getDestinations(),
      this.isDreamDestinationForm.valueChanges.pipe(startWith(false)),
    ]).subscribe(([destinations, isDreamDestination]) => {
      this.destinations = destinations.filter((dest) =>
        isDreamDestination ? dest.isDreamDestination : true
      );
    });
  } 
  
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
