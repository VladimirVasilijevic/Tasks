import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Coordinates } from '../types/coordinates';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  readonly api = 'http://api.weatherunlocked.com/api';
  currentData: Subject<any> = new Subject<any>();
  forecastData: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  getWeatherData(weatherType: string, coordinates: Coordinates) {
    // api/{LocalWeatherType}/{Location}?app_id={APP_ID}&app_key={APP_KEY}

    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${this.api}/${weatherType}/${coordinates.latitude},${coordinates.longitude}?app_id=${environment.app_id}&app_key=${environment.app_key}`)
      .subscribe(data => {
        if (weatherType === 'forecast') {
          this.forecastData.next(data);
        }
        if (weatherType === 'current') {
          this.currentData.next(data);
        }
      });
  }
}
