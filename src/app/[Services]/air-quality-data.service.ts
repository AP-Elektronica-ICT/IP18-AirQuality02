import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AirQualityDataService {

  constructor(private _http: HttpClient) { }

  airQualityData: IRootObject;

  getAirQualityData(): Observable<IRootObject> {
    return this._http.get<IRootObject>("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }
}

export interface IRootObject {
  meta: Meta;
  results: Result[];
}

export interface Result {
  location: string;
  parameter: string;
  date: Date;
  value: number;
  unit: string;
  coordinates: Coordinates;
  country: string;
  city: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Date {
  utc: string;
  local: string;
}

export interface Meta {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}