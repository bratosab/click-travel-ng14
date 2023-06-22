import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Destination } from '../../models/destination.model';
import { ClickTravelService } from '../../click-travel.service';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.scss'],
})
export class DestinationFormComponent implements OnInit {
  destinationForm = this.fb.group({
    name: ['', Validators.required],
    code: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
    ],
    weather: ['', Validators.required],
    isDreamDestination: [false],
  });
  isError = false;
  weatherOptions = ['Sunny', 'Rainy', 'Cloudy', 'Foggy'];

  constructor(private fb: FormBuilder, private ctService: ClickTravelService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.destinationForm.valid) {
      const { name, code, weather, isDreamDestination } =
        this.destinationForm.value;

        const newDestination: Destination = {
          name: name ?? '',
          code: code ?? '',
          weather: weather ?? '',
          isDreamDestination: !!isDreamDestination
        }

        this.isError = false;
        this.ctService.postDestination(newDestination).subscribe({
          next: () => {
            this.destinationForm.reset();
          },
          error: () => {
            this.isError = true;
          }
        })
    }
  }
}
