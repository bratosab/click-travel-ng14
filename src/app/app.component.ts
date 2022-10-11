import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  destinations! : Destination[]

  constructor(private travelService: ClickTravelService) {
  }

  ngOnInit() {
    // this.travelService.getDestinations().subscribe(results => {
    //   this.destinations = results.filter(dest => dest.isDreamDestination)
    // })

    this.travelService.getDestinations().subscribe(results => {
      this.destinations = results
    })
  }

}
