import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-latitude',
  templateUrl: './latitude.component.html',
  styleUrls: ['./latitude.component.css']
})
export class LatitudeComponent implements OnInit {
  @Output() getLatitude;
  constructor() { }

  ngOnInit() {
  }

}
