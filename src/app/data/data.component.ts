import { Component, OnInit } from '@angular/core';
import { AirQualityDataService, IRootObject } from '../[Services]/air-quality-data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {
  ngOnInit(){
    this._svc.getSensorDataAir2Extended().subscribe(result => this.sensorarray[0] = result);
    this._svc.getSensorDataAir3Extended().subscribe(result => this.sensorarray[1] = result);
    this._svc.getSensorDataAir4Extended().subscribe(result => this.sensorarray[2] = result);
    this._svc.getSensorDataAir5miniExtended().subscribe(result => this.sensorarray[3] = result);
    this._svc.getSensorDataAir6Extended().subscribe(result => this.sensorarray[4] = result);
    this._svc.getSensorDataAirProtoExtended().subscribe(result => this.sensorarray[5] = result);
  }

  constructor(private _svc: AirQualityDataService) {
    
  }

  public sensorData: Array<any> = [
    { data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], label: 'Data' }
  ];

  sensorarray: any[] = [];

  averages: any[] = [
    {
      temperature: 0,
      humidity: 0,
      co2: 0,
      sound: 0,
      light: 0
    }
  ];

  sensorid = 0;

  public loadData(parameter: String, sensor_id) {
    for (let i = 0; i < 30; i++){
      switch (parameter) {
        case "temperature": {
          this.sensorData[0].data[i] = this.sensorarray[sensor_id].data[i].attributes.temperature;
          break;
        }
        case "humidity": {
          this.sensorData[0].data[i] = this.sensorarray[sensor_id].data[i].attributes.humidity;
          break;
        }
        case "co2-level": {
          this.sensorData[0].data[i] = this.sensorarray[sensor_id].data[i].attributes.co2;
          break;
        }
        case "sound-level": {
          this.sensorData[0].data[i] = this.sensorarray[sensor_id].data[i].attributes.sound;
          break;
        }
        case "illumination": {
          this.sensorData[0].data[i] = this.sensorarray[sensor_id].data[i].attributes.light;
          break;
        }
      }
      
      console.log(parameter + ": " + i);
      console.log(this.sensorData[0].data[i]);
      console.log(sensor_id);
    }
    
    this.lineChartData = this.sensorData;
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], label: 'Data' }
  ];

  public lineChartLabels: Array<any> = ['-30 mins.',,,,, '-25 mins.',,,,, '-20 mins.',,,,, '-15 mins.',,,,, '-10 mins.',,,,, '-5 mins.',,,,, 'Now'];
  public lineChartOptions: any = { responsive: true };

  public lineChartColors: Array<any> = [
    { // Grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';  

  // Events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public getAverages(sensor_id): void {
    this.averages[0].temperature = 0;
    this.averages[0].humidity = 0;
    this.averages[0].co2 = 0;
    this.averages[0].sound = 0;
    this.averages[0].light = 0;
    for (let i = 0; i < this.sensorarray[sensor_id].data.length; i++){
      this.averages[0].temperature = this.averages[0].temperature + Number(this.sensorarray[sensor_id].data[i].attributes.temperature);
      this.averages[0].humidity = this.averages[0].humidity + Number(this.sensorarray[sensor_id].data[i].attributes.humidity);
      this.averages[0].co2 = this.averages[0].co2 + Number(this.sensorarray[sensor_id].data[i].attributes.co2);
      this.averages[0].sound = this.averages[0].sound + Number(this.sensorarray[sensor_id].data[i].attributes.sound);
      this.averages[0].light = this.averages[0].light + Number(this.sensorarray[sensor_id].data[i].attributes.light);
    }
    this.averages[0].temperature = (this.averages[0].temperature / 30).toFixed(2);
    this.averages[0].humidity = (this.averages[0].humidity / 30).toFixed(2);
    this.averages[0].co2 = (this.averages[0].co2 / 30).toFixed(2);
    this.averages[0].sound = (this.averages[0].sound / 30).toFixed(2);
    this.averages[0].light = (this.averages[0].light / 30).toFixed(2);
  }

}


