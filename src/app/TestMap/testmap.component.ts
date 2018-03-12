import { Component, OnInit } from '@angular/core';
import { AirQualityDataService } from '../[Services]/air-quality-data.service';

@Component({
  selector: 'app-testmap',
  templateUrl: './testmap.component.html',
  styleUrls: ['./testmap.component.scss']
})
export class TestMapComponent implements OnInit {

  data: any[];
  
  constructor(private _svc: AirQualityDataService) { 
    this.data = _svc.rooms;
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

  ngOnInit() {
  }

  detailedData(roomnumber){
    for(var i: number = 0; i < this.data.length; i++){
      if(this.data[i].id == roomnumber){
        this.data[i].hide = !this.data[i].hide;
      }
      if(this.data[i].id != roomnumber && this.data[i].hide == false){
        this.data[i].hide = true;
      }
    }
  }

}
