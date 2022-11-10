import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    if (req.headers.get('Anonymous') === 'true') {
      console.log('anonymos');
      const newHeaders = req.headers.delete('Anonymous');
      const newRequest = req.clone({ headers: newHeaders });
      return next.handle(newRequest);
    } else {
      let authService: any = this.injector.get(AuthService);
      let tokenizedReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          authService.loadToken() ? authService.loadToken() : ''
        ),
      });
      console.log(tokenizedReq);
      return next.handle(tokenizedReq);
    }
  }
}
