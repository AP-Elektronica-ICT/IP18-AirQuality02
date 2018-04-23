import { Component, OnInit } from '@angular/core';
import { AirQualityDataService, IRootObject } from '../[Services]/air-quality-data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {
  ngOnInit(){
    this._svc.getSensorDataAir3().subscribe(result => this.sensorAir3 = result);
  }

  sensorAir3: IRootObject;
  constructor(private _svc: AirQualityDataService) {

  }

  public sensorData: Array<any> = [
    { data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], label: 'Temperature' },
    { data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], label: 'Humidity' },
    { data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], label: 'CO2-level' },
    { data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], label: 'Sound-level' },
    { data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], label: 'Illuminance' }
  ];

  public loadData(): void {
    for (let i = 0; i < this.sensorData[0].length; i++){
      this.sensorData[0].data[i] = this.sensorAir3.data[i].attributes.temperature;
    }
    for (let i = 0; i < this.sensorData[1].length; i++){
      this.sensorData[1].data[i] = this.sensorAir3.data[i].attributes.humidity;
    }
    for (let i = 0; i < this.sensorData[2].length; i++){
      this.sensorData[2].data[i] = this.sensorAir3.data[i].attributes.co2;
    }
    for (let i = 0; i < this.sensorData[3].length; i++){
      this.sensorData[3].data[i] = this.sensorAir3.data[i].attributes.sound;
    }
    for (let i = 0; i < this.sensorData[4].length; i++){
      this.sensorData[4].data[i] = this.sensorAir3.data[i].attributes.light;
    }
    
    this.lineChartData = this.sensorData;
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40, 55], label: 'Temperature' },
    { data: [28, 48, 40, 19, 86, 27, 90, 62], label: 'Humidity' },
    { data: [18, 48, 77, 12, 100, 27, 40, 36], label: 'CO2-value' },
    { data: [23, 69, 18, 22, 38, 27, 42, 45], label: 'Sound-value' },
    { data: [94, 78, 77, 61, 65, 54, 63, 64], label: 'Illumination' }
  ];
  public lineChartLabels: Array<any> = ['-30 mins.',,,,, '-25 mins.',,,,, '-20 mins.',,,,, '-15 mins.',,,,, '-10 mins.',,,,, '-5 mins.',,,,, 'Now'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
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


