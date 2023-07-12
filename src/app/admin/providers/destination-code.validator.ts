import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ClickTravelService } from '../../click-travel.service';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class DestinationCodeValidator implements AsyncValidator {
  constructor(private clickTravelService: ClickTravelService) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.clickTravelService
      .getDestination({ code: control.value as string })
      .pipe(
        map((destinationsList) => {
          if (destinationsList.length > 0) {
            return { codeTaken: true };
          } else {
            return null;
          }
        })
      );
  }
}
