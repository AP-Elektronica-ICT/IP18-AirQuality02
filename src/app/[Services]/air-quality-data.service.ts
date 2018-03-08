import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AirQualityDataService {

  rooms: any[] = [
    {
      "id": "101",
      "room": "Room 101",
      "temperature": "21",
      "humidity": "34",
      "co2level": "325",
      "soundlevel": "43",
      "illuminance": "80",
      hide: true
    },
    {
      "id": "102",
      "room": "Room 102",
      "temperature": "25",
      "humidity": "36",
      "co2level": "400",
      "soundlevel": "35",
      "illuminance": "180",
      hide: true
    },
    {
      "id": "103",
      "room": "Room 103",
      "temperature": "22",
      "humidity": "40",
      "co2level": "450",
      "soundlevel": "50",
      "illuminance": "280",
      hide: true
    },
    {
      "id": "104",
      "room": "Room 104",
      "temperature": "23",
      "humidity": "43",
      "co2level": "500",
      "soundlevel": "33",
      "illuminance": "380",
      hide: true
    },
    {
      "id": "105",
      "room": "Room 105",
      "temperature": "24",
      "humidity": "45",
      "co2level": "950",
      "soundlevel": "45",
      "illuminance": "480",
      hide: true
    },
    {
      "id": "106",
      "room": "Room 106",
      "temperature": "18",
      "humidity": "32",
      "co2level": "1200",
      "soundlevel": "35",
      "illuminance": "580",
      hide: true
    },
    {
      "id": "107",
      "room": "Room 107",
      "temperature": "23",
      "humidity": "35",
      "co2level": "2000",
      "soundlevel": "78",
      "illuminance": "680",
      hide: true
    },
  ];

  constructor() {
    
   }

}