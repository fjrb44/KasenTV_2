import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService, public tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokenService.get()}`
      }
    });

    return next.handle(request);
  }
}