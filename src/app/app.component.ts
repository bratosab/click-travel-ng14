import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  destinations!: Destination[];
  isLoading = true;

  constructor(private clickTravelService: ClickTravelService){}

  ngOnInit(): void {
    this.clickTravelService.getDestinations().subscribe((result) => {
      this.destinations = result.filter((destination) => {
        return destination.isDreamDestination
      })
    })
  }
}
