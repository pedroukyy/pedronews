import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('newsapi.org')) {
      const cloned = req.clone({
        setHeaders: {
          'X-Api-Key': environment.newsApiKey
        }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
