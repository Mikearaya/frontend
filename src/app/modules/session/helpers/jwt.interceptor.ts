import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (activeUser && activeUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${activeUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}
