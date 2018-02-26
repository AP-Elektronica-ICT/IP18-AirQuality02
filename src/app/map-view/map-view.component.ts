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

}
