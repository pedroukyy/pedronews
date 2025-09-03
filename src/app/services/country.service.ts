import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<{ value: string; label: string }[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((res: any) => {
        if (res && res.data) {
          return res.data.map((c: any) => ({
            value: c.name,
            label: `${c.flag} ${c.name}`
          }));
        }
        return [];
      })
    );
  }
}
