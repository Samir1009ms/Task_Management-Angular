import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJfaWQiOiI2NDAyZjVlZDRhMWUxOTVlMTdkOGU0YTkiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2ODA0MjEwMjh9.' +
    'CRna5jscHGHkEgcF-P2fhHPgvfcRYZ9we0MsdbtW66U'
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      headers: request.headers.set("authorization", this.authService.token)
    })
    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
