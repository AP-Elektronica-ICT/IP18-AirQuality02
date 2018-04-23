import { Component, OnInit } from '@angular/core';
import { AirQualityDataService, IRootObject } from '../[Services]/air-quality-data.service';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  ngOnInit() {
    this._svc.getSensorsInfo().subscribe(result => this.sensors = result);
    this._svc.getSensorDataAir2().subscribe(result => this.testarray[0] = result); 
    this._svc.getSensorDataAir3().subscribe(result => this.testarray[1] = result);
    this._svc.getSensorDataAir4().subscribe(result => this.testarray[2] = result);
    this._svc.getSensorDataAir5mini().subscribe(result => this.testarray[3] = result);
    this._svc.getSensorDataAir6().subscribe(result => this.testarray[4] = result);
    this._svc.getSensorDataAirProto().subscribe(result => this.testarray[5] = result);
   }
  warnings: any[];
  testarray: any[] = [];
  sensorAir3: IRootObject;
  sensorAir2: IRootObject;
  sensors: IRootObject;
  constructor(private _svc: AirQualityDataService) {

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
        _variable = this.testarray[index].data[0].attributes.temperature;
        break;
      case "humidity":
        _variable = this.testarray[index].data[0].attributes.humidity;
        break;
      case "co2level":
        _variable = this.testarray[index].data[0].attributes.co2;
        break;
      case "soundlevel":
        _variable = this.testarray[index].data[0].attributes.sound;
        break;
      case "illuminance":
        _variable = this.testarray[index].data[0].attributes.light;
        break;
    }
    return _variable;
  }

  /*detailedData(id, index) {
    if (this.rooms[index].room == id) {
      this.rooms[index].hide = !this.rooms[index].hide;
    }
    for (var i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].room != id && this.rooms[i].hide == false && i != index) {

      }
    }
  }*/

  getDetailedData(ID: number){
    this.id = ID;
    return this.id;
  }
  id;
  templateCheck = true;
  variable = 'temperature';

  
}
