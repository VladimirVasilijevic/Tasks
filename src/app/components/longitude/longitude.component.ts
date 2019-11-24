import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-longitude',
  templateUrl: './longitude.component.html',
  styleUrls: ['./longitude.component.css']
})
export class LongitudeComponent implements OnInit {
  @Output() getLongitude;
  constructor() { }

  ngOnInit() {
  }

}
