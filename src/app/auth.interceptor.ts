import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interception', request.url)

      const clonedReq = request.clone({
        headers: request.headers.set('TestAuth', 'Bordeaux cest la meiileure ville')
      })

    return next.handle(clonedReq);
  }
}
