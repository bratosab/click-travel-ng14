import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormControlStatus,
} from '@angular/forms';
import { ClickTravelService } from 'src/app/click-travel.service';
import { Destination } from 'src/app/models/destination.interface';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss'],
})
export class AdminContainerComponent implements OnInit {
  displayNewDestination = false;
  weathers = [
    'Sunny',
    'Cloudy',
    'Rainy',
    'Snowy',
    'Windy',
    'Foggy',
    'Thundery',
    'Hail',
  ];

  destinationForm = this.fb.group({
    name: ['', Validators.required],
    code: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
    ],
    weather: ['', Validators.required],
    isDreamDestination: [false],
  });

  constructor(
    private fb: FormBuilder,
    private travelService: ClickTravelService
  ) {}

  ngOnInit(): void {}

  get isDreamDestinationControl() {
    return this.destinationForm.controls['isDreamDestination'] as FormControl;
  }

  validateForm() {
    if (this.destinationForm.valid) {
      const destination: Destination = { ...this.destinationForm.value };

      this.travelService.addDestination(destination).subscribe((response) => {
        if (response) {
          this.destinationForm.reset();
        } else {
          // gerer l'erreur
        }
      });
    }
  }
}
