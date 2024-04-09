

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: string = 'YOUR_API_KEY'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  getWeather(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(query)}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
