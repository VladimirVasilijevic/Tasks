import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CoordinatesComponent } from './components/coordinates/coordinates.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { LongitudeComponent } from './components/longitude/longitude.component';
import { LatitudeComponent } from './components/latitude/latitude.component';


@NgModule({
  declarations: [
    AppComponent,
    CoordinatesComponent,
    DataViewComponent,
    LongitudeComponent,
    LatitudeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
