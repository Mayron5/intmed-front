import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService {

  constructor(private router: Router, private _tokenService: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this._tokenService.getToken();

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    });

    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse): Observable<HttpEvent<any>> => {
        if (error.status === 401) this.router.navigate([''])
        return throwError(() => new Error(error?.error.toString()))
      })
      )
  }

}
