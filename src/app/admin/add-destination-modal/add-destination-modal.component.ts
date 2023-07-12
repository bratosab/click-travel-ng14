import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Destination } from '../../models/destination.model';
import { ClickTravelService } from '../../click-travel.service';
import { DestinationCodeValidator } from '../providers/destination-code.validator';

@Component({
  selector: 'app-add-destination-modal',
  templateUrl: './add-destination-modal.component.html',
  styleUrls: ['./add-destination-modal.component.scss'],
})
export class AddDestinationModalComponent implements OnInit {
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
        asyncValidators: [this.destinationCodeValidator],
      },
    ],
    weather: ['', Validators.required],
    isDreamDestination: [false],
  });
  isError = false;

  constructor(
    private dialogRef: MatDialogRef<AddDestinationModalComponent>,
    private fb: FormBuilder,
    private clickTravelService: ClickTravelService,
    private destinationCodeValidator: DestinationCodeValidator
  ) {}

  ngOnInit(): void {}

  get code() {
    return this.destinationForm.get('code');
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.destinationForm.valid) {
      const { name, code, weather, isDreamDestination } =
        this.destinationForm.value;

      const newDestination: Destination = {
        name: name ?? '',
        code: (code as string) ?? '',
        weather: weather ?? '',
        isDreamDestination: isDreamDestination ?? false,
      };

      this.isError = false;
      this.clickTravelService.postDestination(newDestination).subscribe({
        next: () => {
          this.destinationForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          this.isError = true;
        },
      });
    }
  }
}
