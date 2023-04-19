import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClickTravelService } from '../../click-travel.service';
import { Destination } from '../../models/destination.model';
import { DestinationCodeValidator } from '../../validators/destination-code.validator';

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
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ],
        asyncValidators: [this.destinationCodeValidator]
      },
    ],
    weather: ['', Validators.required],
    isDreamDestination: [false],
  });

  weathers = ['Sunny', 'Cloudy', 'Rainy', 'Foggy'];
  isError = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef<DestinationFormComponent>,
    private clickTravelService: ClickTravelService,
    private destinationCodeValidator: DestinationCodeValidator
  ) {}

  ngOnInit(): void {}

  get codeControl() { return this.destinationForm.controls.code }

  submitDestination() {
    if (this.destinationForm.valid) {
      const { name, code, weather, isDreamDestination } =
        this.destinationForm.value;

      const newDestination: Destination = {
        name: name || '',
        code: code as string,
        weather: weather || '',
        isDreamDestination: isDreamDestination || false,
      };

      // this.clickTravelService.addDestination(newDestination).subscribe(() => {
      //   this.dialog.close()
      // });

      this.isLoading = true;
      this.clickTravelService.addDestination(newDestination).subscribe({
        next: (destination) => {
          this.dialog.close();
        },
        error: (error) => {
          this.isError = true;
          this.isLoading = false;
        },
      });
    }
  }

  cancelAddDestination() {
    this.destinationForm.reset();
    this.dialog.close();
  }
}
