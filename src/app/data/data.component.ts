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
  }

  sensorAir3: IRootObject;
  constructor(private _svc: AirQualityDataService) {

  }

  public sensorData: Array<any> = [
    { data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], label: 'Data' }
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


