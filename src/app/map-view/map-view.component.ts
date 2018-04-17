import { Component, OnInit } from '@angular/core';
import { AirQualityDataService, IRootObject } from '../[Services]/air-quality-data.service';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  rooms: any[];
  warnings: any[];
  sensorAir3: IRootObject;
  sensors: IRootObject;
  constructor(private _svc: AirQualityDataService) {
    this.sensorAir3 = _svc.SensorDataAir3;
    //this.sensors = _svc.SensorsInfo;
  }

  ngOnInit() {
   this._svc.getSensorDataAir3().subscribe(result => this.sensorAir3 = result);
   this._svc.getSensorsInfo().subscribe(result => this.sensors = result);
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
        if (hvalue > 260) {
          hvalue = 260;
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
        _variable = this.sensorAir3.data[index].attributes.temperature;
        break;
      case "humidity":
        _variable = this.sensorAir3.data[index].attributes.humidity;
        break;
      case "co2level":
        _variable = this.sensorAir3.data[index].attributes.co2;
        break;
      case "soundlevel":
        _variable = this.sensorAir3.data[index].attributes.sound;
        break;
      case "illuminance":
        _variable = this.sensorAir3.data[index].attributes.light;
        break;
    }
    return _variable;
  }

  detailedData(id, index) {
    if (this.rooms[index].room == id) {
      this.rooms[index].hide = !this.rooms[index].hide;
    }
    for (var i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].room != id && this.rooms[i].hide == false && i != index) {
        this.rooms[i].hide = true;
      }
    }

  }
  templateCheck = true;
  variable = 'temperature';
}
