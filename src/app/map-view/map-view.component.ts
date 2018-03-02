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
      "temperature": "21",
      "humidity": "40",
      "co2level": "765",
      "soundlevel": "84",
      "illuminance": "80",
    },
    {
      "room": "room 102",
      "temperature": "25",
      "humidity": "60",
      "co2level": "755",
      "soundlevel": "92",
      "illuminance": "80",
    },
    {
      "room": "room 103",
      "temperature": "22",
      "humidity": "47",
      "co2level": "748",
      "soundlevel": "82",
      "illuminance": "80",
    },
    {
      "room": "room 104",
      "temperature": "23",
      "humidity": "43",
      "co2level": "763",
      "soundlevel": "83",
      "illuminance": "80",
    },
    {
      "room": "room 105",
      "temperature": "24",
      "humidity": "65",
      "co2level": "765",
      "soundlevel": "65",
      "illuminance": "80",
    },
    {
      "room": "room 106",
      "temperature": "18",
      "humidity": "32",
      "co2level": "789",
      "soundlevel": "75",
      "illuminance": "80",
    },
    {
      "room": "room 107",
      "temperature": "23",
      "humidity": "52",
      "co2level": "763",
      "soundlevel": "78",
      "illuminance": "80",
    },
  ];
}
