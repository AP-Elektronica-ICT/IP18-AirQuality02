import { Component, OnInit } from '@angular/core';
import { AirQualityDataService, IRootObject } from '../[Services]/air-quality-data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {
  ngOnInit(){
    this._svc.getSensorDataAir3Extended().subscribe(result => this.sensorAir3 = result);
    
    for (let i = 0; i < this.sensorAir3.data.length; i++){
      this.averages[0].temperature = this.averages[0].temperature + this.sensorAir3.data[i].attributes.temperature;
      this.averages[0].humidity = this.averages[0].humidity + this.sensorAir3.data[i].attributes.humidity;
      this.averages[0].co2 = this.averages[0].co2 + this.sensorAir3.data[i].attributes.co2;
      this.averages[0].sound = this.averages[0].sound + this.sensorAir3.data[i].attributes.sound;
      this.averages[0].light = this.averages[0].light + this.sensorAir3.data[i].attributes.light;
    }
    this.averages[0].temperature = this.averages[0].temperature / 30;
    this.averages[0].humidity = this.averages[0].humidity / 30;
    this.averages[0].co2 = this.averages[0].co2 / 30;
    this.averages[0].sound = this.averages[0].sound / 30;
    this.averages[0].light = this.averages[0].light / 30;
  }

  sensorAir3: IRootObject;
  constructor(private _svc: AirQualityDataService) {
    
  }

  public sensorData: Array<any> = [
    { data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], label: 'Data' }
  ];

  averages: any[] = [
    {
      temperature: 0,
      humidity: 0,
      co2: 0,
      sound: 0,
      light: 0
    }
  ];

  public loadData(parameter: String) {
    for (let i = 0; i < 30; i++){
      switch (parameter) {
        case "temperature": {
          this.sensorData[0].data[i] = this.sensorAir3.data[i].attributes.temperature;
          break;
        }
        case "humidity": {
          this.sensorData[0].data[i] = this.sensorAir3.data[i].attributes.humidity;
          break;
        }
        case "co2-level": {
          this.sensorData[0].data[i] = this.sensorAir3.data[i].attributes.co2;
          break;
        }
        case "sound-level": {
          this.sensorData[0].data[i] = this.sensorAir3.data[i].attributes.sound;
          break;
        }
        case "illumination": {
          this.sensorData[0].data[i] = this.sensorAir3.data[i].attributes.light;
          break;
        }
      }
      
      console.log(parameter);
      console.log(this.sensorData[0].data[i]);
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
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';  

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}


