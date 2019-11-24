import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LatitudeComponent } from '../latitude/latitude.component';
import { LongitudeComponent } from '../longitude/longitude.component';
import { WeatherService } from 'src/app/services/weather.service';
import { Coordinates } from 'src/app/types/coordinates';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent implements OnInit {
  @ViewChild(LatitudeComponent, {static: false}) latitude: LatitudeComponent;
  @ViewChild(LongitudeComponent, {static: false}) longitude: LongitudeComponent;
  weatherData: any;

  isSubmitted = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } else {
      this.weatherService.getWeatherData(form.value.weatherType, this.getCoordinates());
    }
  }

  private getCoordinates(): Coordinates {
    return {
      latitude: this.latitude.getLatitude,
      longitude: this.longitude.getLongitude
    };
  }
}
