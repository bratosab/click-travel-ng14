import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { ClickTravelService } from '../click-travel.service';
import { Destination } from '../models/destination.interface';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {
  title = this.translate.instant('ChooseDestination');
  private destinations: Destination[] = [];
  filteredDestinations: Destination[] = [];
  showDreamDestination: boolean = true;
  searchTerm: string;
  results: Destination[] = [];

  constructor(private travelService: ClickTravelService, private translate: TranslateService) {
  }

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

  search({ query }: { query: string }) {
    const params = new HttpParams().set(
      'filter',
      JSON.stringify({ where: { name: { regexp: `^${query}` } } })
    );

    this.travelService
      .getDestinations(params)
      .subscribe((nameList) => {
        this.results = nameList;
      });
  }
}
