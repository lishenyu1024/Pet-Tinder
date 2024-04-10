import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private currentPositionSubject: Subject<GeolocationPosition> = new Subject<GeolocationPosition>();

  constructor(private http: HttpClient) { }

  getCurrentPosition(): Observable<GeolocationPosition> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => this.currentPositionSubject.next(position),
        (error: GeolocationPositionError) => this.currentPositionSubject.error(error)
      );
    } else {
      this.currentPositionSubject.error('Geolocation is not supported by this browser.');
    }

    return this.currentPositionSubject.asObservable();
  }

  getWeather(latitude: number, longitude: number): Observable<any> {
    const apiKey = environment.weatherApiKey; // api key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    return this.http.get(apiUrl);
  }
}

