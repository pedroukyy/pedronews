import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

 getTopHeadlines(countryCode: string, category: string = ''): Observable<any[]> {
  let url = `${this.apiUrl}?country=${countryCode}`;
  if (category) {
    url += `&category=${category}`;
  }
  return this.http.get<any>(url).pipe(
    map(res => res.articles || [])
  );
}

}
