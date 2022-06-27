import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { ClickTravelService } from 'src/app/click-travel.service';

@Injectable({ providedIn: 'root' })
export class DestinationCodeValidator implements AsyncValidator {
  constructor(private clickTravelService: ClickTravelService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const params = new HttpParams().set(
      'filter',
      JSON.stringify({ where: { code: control.value } })
    );

    return this.clickTravelService.getDestinations(params).pipe(
      map((destList) => (destList.length > 0 ? { codeTaken: true } : null)),
      catchError(() => of(null))
    );
  }
}
