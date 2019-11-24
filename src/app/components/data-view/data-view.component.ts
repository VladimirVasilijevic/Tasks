import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit, OnChanges {
  currentData: any;
  forecastData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.currentData.subscribe(data => {
      this.currentData = data.temp_c;
    });

    this.weatherService.forecastData.subscribe(data => {
      this.forecastData = data.Days;
    });
  }

  ngOnChanges() {
  }

}
