import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AirQualityDataService {

  getSensorDataAir2(): Observable<IRootObject> {
    return this._http.get<IRootObject>("https://air.kiisu.club/v1/device/air-2/data?limit=1")
  }

  getSensorDataAir3(): Observable<IRootObject> {
    return this._http.get<IRootObject>("https://air.kiisu.club/v1/device/air-3/data?limit=1")
  }

  getSensorsInfo(): Observable<IRootObject> {
    return this._http.get<IRootObject>("https://air.kiisu.club/v1/devices")
  }

  getSensorDataAir4(): Observable<IRootObject> {
    return this._http.get<IRootObject>("https://air.kiisu.club/v1/device/air-4/data?limit=1")
  }

  getSensorDataAir5mini(): Observable<IRootObject> {
    return this._http.get<IRootObject>("https://air.kiisu.club/v1/device/air-mini5/data?limit=1");
  }

  getSensorDataAir6(): Observable<IRootObject>{
    return this._http.get<IRootObject>("https://air.kiisu.club/v1/device/air-6/data?limit=1")
  }

  getSensorDataAirProto(): Observable<IRootObject> {
    return this._http.get<IRootObject>("https://air.kiisu.club/v1/device/air-proto/data?limit=1")
  }

  rooms: any[] = [
    {
      "id": "101",
      "room": "Room 101",
      "temperature": "21",
      "humidity": "34",
      "co2level": "325",
      "soundlevel": "43",
      "illuminance": "80",
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
      hide: true
    },
  ];

  roomsDefault: any[] = [
    {
      "id": "101",
      "room": "Room 101",
      "temperature": "21",
      "humidity": "34",
      "co2level": "325",
      "soundlevel": "43",
      "illuminance": "80",
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
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
      settings:{
        temperature:{
          preferred: 21,
          max: 23,
          min: 19 
        },
        humidity:{
          preferred: 40,
          max: 60,
          min: 30 
        },
        co2level:{
          preferred: 450,
          max: 750, 
        },
        soundlevel:{
          preferred: 50,
          max: 75,
          min: 25 
        },
        illuminance:{
          preferred: 500,
          max: 750,
          min: 100 
        }
      },
      hide: true
    },
  ];

  constructor(private _http: HttpClient) { }

}

export interface IRootObject {
  data: Datum[];
}

export interface Datum {
  id: string;
  type: string;
  attributes: Attributes;
}

export interface Attributes {
  device_id: string;
  temperature: string;
  humidity: string;
  co2?: any;
  sound?: any;
  light?: any;
  created_at: string;
  data_url: string;
}