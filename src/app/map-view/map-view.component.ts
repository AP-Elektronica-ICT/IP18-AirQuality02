import { Component, OnInit } from '@angular/core';
import { IRootObject, AirQualityDataService } from '../[Services]/air-quality-data.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  airqualitydata: IRootObject

  constructor(private _svc: AirQualityDataService) { }

  ngOnInit() {
    this._svc.getAirQualityData()
      .subscribe(result => this.airqualitydata = result)
  }

  getColor(actual) {
    var hvalue: any;
    var optimum: any;
    optimum = 21;
    hvalue = 120 + 25 * (optimum - actual);
    if (hvalue > 280) {
      hvalue = 280;
    }
    if (hvalue < 0) {
      hvalue = 0;
    }
    return 'hsl(' + hvalue + ', 100%, 60%)';
  }

  rooms: any[] = [
    {
      "room": "room 101",
      "temperature": "21"
    },
    {
      "room": "room 102",
      "temperature": "25"
    },
    {
      "room": "room 103",
      "temperature": "22"
    },
    {
      "room": "room 104",
      "temperature": "23"
    },
    {
      "room": "room 105",
      "temperature": "24"
    },
    {
      "room": "room 106",
      "temperature": "18"
    },
    {
      "room": "room 107",
      "temperature": "23"
    },
  ];
}
