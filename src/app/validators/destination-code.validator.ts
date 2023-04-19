import { HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { ClickTravelService } from '../click-travel.service';

@Injectable({ providedIn: 'root' })
export class DestinationCodeValidator implements AsyncValidator {
  constructor(private clickTravelService: ClickTravelService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const destinationCode = control.value;

    const params = new HttpParams().set(
      'filter',
      JSON.stringify({ where: { code: destinationCode } })
    );

    return this.clickTravelService.getDestinations(params).pipe(
      map((destinations) => {
        if (destinations.length > 0) {
          return { codeTaken: true };
        } else {
          return null;
        }
      }),
      catchError(() => {
        return of(null);
      })
    );
  }
}
