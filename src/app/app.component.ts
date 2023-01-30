import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Destination } from './models/destination.interface';
import { ClickTravelService } from './providers/click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  // // destinations$!: Observable<Destination[]>;
  private destinations: Destination[] = [];
  filteredDestinations: Destination[] = [];
  showDreamDestination: boolean = true;

  constructor(private travelService: ClickTravelService) {}

  ngOnInit() {
    this.travelService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations;
      this.filterDestinations();
    });

  }


  filterDestinations() {
    this.filteredDestinations = this.destinations.filter((d) =>
      this.showDreamDestination ? d.isDreamDestination : true
    );
  }
}
