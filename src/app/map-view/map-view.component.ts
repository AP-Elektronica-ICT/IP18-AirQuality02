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

  getColor(__variable, actual) {
    var hvalue: any;
    var svalue: any;
    var lvalue: any;
    var optimum: number;
    var colorSensitivity: number;
    switch (__variable) {
      case "temperature":
        optimum = 21;
        colorSensitivity = 20;
        hvalue = 120 + colorSensitivity * (optimum - actual);
        svalue = 100;
        lvalue = 60;
        if (hvalue > 280) {
          hvalue = 280;
        }
        if (hvalue < 0) {
          hvalue = 0;
        }
        lvalue = 60;
        break;
      case "humidity":
        optimum = 45;
        colorSensitivity = 5;
        hvalue = 120 - colorSensitivity * (optimum - actual);
        svalue = 100;
        lvalue = 60;
        if (hvalue > 250) {
          hvalue = 250;
        }
        if (hvalue < 0) {
          hvalue = 0;
        }
        break;
      case "co2level":
        optimum = 350;
        colorSensitivity = 0.1;
        hvalue = 120 + colorSensitivity * (optimum - actual);
        svalue = 100;
        lvalue = 60;
        if (hvalue > 120) {
          hvalue = 120;
        }
        if (hvalue < 0) {
          hvalue = 0;
        }
        break;
      case "soundlevel":
        optimum = 50;
        colorSensitivity = 3;
        hvalue = 120 + colorSensitivity * (optimum - actual);
        svalue = 100;
        lvalue = 60;
        if (hvalue > 210) {
          hvalue = 210;
        }
        if (hvalue < 0) {
          hvalue = 0;
        }
        break;
      case "illuminance":
        optimum = 250;
        colorSensitivity = 0.1;
        hvalue = 200;
        svalue = 40;
        lvalue = 50 - colorSensitivity * (optimum - actual);
        if (lvalue > 100) {
          lvalue = 100;
        }
        if (lvalue < 0) {
          lvalue = 0;
        }
        break;
    }
    return 'hsl(' + hvalue + ', ' + svalue + '%, ' + lvalue + '%)';
  }

  getVariable(__variable, index) {
    var _variable: string;
    switch (__variable) {
      case "temperature":
        _variable = this.rooms[index].temperature;
        break;
      case "humidity":
        _variable = this.rooms[index].humidity;
        break;
      case "co2level":
        _variable = this.rooms[index].co2level;
        break;
      case "soundlevel":
        _variable = this.rooms[index].soundlevel;
        break;
      case "illuminance":
        _variable = this.rooms[index].illuminance;
        break;
    }
    return _variable;
  }

  detailedData(roomnumber, index){
      if(this.rooms[index].room == roomnumber){
        this.rooms[index].hide = !this.rooms[index].hide;
      }
      if(this.rooms[index].room != roomnumber && this.rooms[index].hide == false){
        this.rooms[index].hide = true;
      }
  }

  variable = 'temperature';

  rooms: any[] = [
    {
      "room": "room 101",
      "temperature": "21",
      "humidity": "34",
      "co2level": "325",
      "soundlevel": "43",
      "illuminance": "80",
      hide: true
    },
    {
      "room": "room 102",
      "temperature": "25",
      "humidity": "36",
      "co2level": "400",
      "soundlevel": "35",
      "illuminance": "180",
      hide: true
    },
    {
      "room": "room 103",
      "temperature": "22",
      "humidity": "40",
      "co2level": "450",
      "soundlevel": "50",
      "illuminance": "280",
      hide: true
    },
    {
      "room": "room 104",
      "temperature": "23",
      "humidity": "43",
      "co2level": "500",
      "soundlevel": "33",
      "illuminance": "380",
      hide: true
    },
    {
      "room": "room 105",
      "temperature": "24",
      "humidity": "45",
      "co2level": "950",
      "soundlevel": "45",
      "illuminance": "480",
      hide: true
    },
    {
      "room": "room 106",
      "temperature": "18",
      "humidity": "32",
      "co2level": "1200",
      "soundlevel": "35",
      "illuminance": "580",
      hide: true
    },
    {
      "room": "room 107",
      "temperature": "23",
      "humidity": "35",
      "co2level": "2000",
      "soundlevel": "78",
      "illuminance": "680",
      hide: true
    },
  ];
}
