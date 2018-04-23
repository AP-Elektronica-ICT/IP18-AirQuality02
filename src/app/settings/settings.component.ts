import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirQualityDataService } from '../[Services]/air-quality-data.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private fragment: string;
  rooms: any[];
  //preferred values
  preferredTemp = "21";
  preferredHum = "40";
  preferredCO = "450";
  preferredSound = "50";
  preferredIllu = "500";

  //max values
  maxTemp = "23";
  maxHum = "60";
  maxCO = "750";
  maxSound = "75";
  maxIllu = "750";

  //min values
  minTemp = "19";
  minHum = "30";
  minSound = "25";
  minIllu = "100";

  constructor(private _svc: AirQualityDataService, private route: ActivatedRoute) {
    this.rooms = _svc.rooms;
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment });
  }
  ngAfterViewChecked(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  UpdateAll() {

  }

  Update(roomid){
    console.log("update specific room: " + roomid);
    switch (roomid) {
      case "101":
        //preferred
        this.rooms[0].settings.temperature.preferred = parseInt(this.preferredTemp);
        this.rooms[0].settings.humidity.preferred = parseInt(this.preferredHum);
        this.rooms[0].settings.co2level.preferred = parseInt(this.preferredCO);
        this.rooms[0].settings.soundlevel.preferred = parseInt(this.preferredSound);
        this.rooms[0].settings.illuminance.preferred = parseInt(this.preferredIllu);

        //max
        this.rooms[0].settings.temperature.max = parseInt(this.maxTemp);
        this.rooms[0].settings.humidity.max = parseInt(this.maxHum);
        this.rooms[0].settings.co2level.max = parseInt(this.maxCO);
        this.rooms[0].settings.soundlevel.max = parseInt(this.maxSound);
        this.rooms[0].settings.illuminance.max = parseInt(this.maxIllu);

        //min
        this.rooms[0].settings.temperature.min = parseInt(this.minTemp);
        this.rooms[0].settings.humidity.min = parseInt(this.minHum);
        this.rooms[0].settings.soundlevel.min = parseInt(this.minSound);
        this.rooms[0].settings.illuminance.min = parseInt(this.minIllu);

        console.log("room update", this.rooms[0]);
        console.log("default room", this._svc.roomsDefault[0]);
        break;
      case "102":
        this.rooms[1] = this._svc.roomsDefault[1];
        console.log("room update", this.rooms[1]);
        console.log("default room", this._svc.roomsDefault[1]);
        break;
      case "103":
        this.rooms[2] = this._svc.roomsDefault[2];
        console.log("room update",this.rooms[2]);
        console.log("default room", this._svc.roomsDefault[2]);
        break;
      case "104":
        this.rooms[3] = this._svc.roomsDefault[3];
        console.log("room update", this.rooms[3]);
        console.log("default room", this._svc.roomsDefault[3]);
        break;
      case "105":
        this.rooms[4] = this._svc.roomsDefault[4];
        console.log("room update", this.rooms[4]);
        console.log("default room", this._svc.roomsDefault[4]);
        break;
      case "106":
        this.rooms[5] = this._svc.roomsDefault[5];
        console.log("room update", this.rooms[5]);
        console.log("default room", this._svc.roomsDefault[5]);
        break;
      case "107":
        this.rooms[6] = this._svc.roomsDefault[6];
        console.log("room update", this.rooms[6]);
        console.log("default room", this._svc.roomsDefault[6]);
        break;
    }
  }

  ResetAll() {
    console.log("reset all");
    this.rooms = this._svc.roomsDefault;
    console.log(this.rooms);
    console.log(this._svc.roomsDefault);
  }

  Reset(roomid) {
    console.log("reset specific room: " + roomid);
    switch (roomid) {
      case "101":
        //reset preferred values
        this.preferredTemp = this._svc.roomsDefault[0].settings.temperature.preferred;
        this.preferredHum = this._svc.roomsDefault[0].settings.humidity.preferred;
        this.preferredCO = this._svc.roomsDefault[0].settings.co2level.preferred;
        this.preferredSound = this._svc.roomsDefault[0].settings.soundlevel.preferred;
        this.preferredIllu = this._svc.roomsDefault[0].settings.illuminance.preferred;

        //reset max values
        this.maxTemp = this._svc.roomsDefault[0].settings.temperature.max;
        this.maxHum = this._svc.roomsDefault[0].settings.humidity.max;
        this.maxCO = this._svc.roomsDefault[0].settings.co2level.max;
        this.maxSound = this._svc.roomsDefault[0].settings.soundlevel.max;
        this.maxIllu = this._svc.roomsDefault[0].settings.illuminance.max;

        //reset min values
        this.minTemp = this._svc.roomsDefault[0].settings.temperature.min;
        this.minHum = this._svc.roomsDefault[0].settings.humidity.min;
        this.minSound = this._svc.roomsDefault[0].settings.soundlevel.min;
        this.minIllu = this._svc.roomsDefault[0].settings.illuminance.min;

        //reset array with preferred values
        this.rooms[0].settings.temperature.preferred = parseInt(this.preferredTemp);
        this.rooms[0].settings.humidity.preferred = parseInt(this.preferredHum);
        this.rooms[0].settings.co2level.preferred = parseInt(this.preferredCO);
        this.rooms[0].settings.soundlevel.preferred = parseInt(this.preferredSound);
        this.rooms[0].settings.illuminance.preferred = parseInt(this.preferredIllu);

        //reset array with max values
        this.rooms[0].settings.temperature.max = parseInt(this.maxTemp);
        this.rooms[0].settings.humidity.max = parseInt(this.maxHum);
        this.rooms[0].settings.co2level.max = parseInt(this.maxCO);
        this.rooms[0].settings.soundlevel.max = parseInt(this.maxSound);
        this.rooms[0].settings.illuminance.max = parseInt(this.maxIllu);

        //reset array with min values
        this.rooms[0].settings.temperature.min = parseInt(this.minTemp);
        this.rooms[0].settings.humidity.min = parseInt(this.minHum);
        this.rooms[0].settings.soundlevel.min = parseInt(this.minSound);
        this.rooms[0].settings.illuminance.min = parseInt(this.minIllu);

        console.log("room reset", this.rooms[0]);
        console.log("default room", this._svc.roomsDefault[0]);
        break;
      case "102":
        this.rooms[1] = this._svc.roomsDefault[1];
        console.log("room reset", this.rooms[1]);
        console.log("default room", this._svc.roomsDefault[1]);
        break;
      case "103":
        this.rooms[2] = this._svc.roomsDefault[2];
        console.log("room reset",this.rooms[2]);
        console.log("default room", this._svc.roomsDefault[2]);
        break;
      case "104":
        this.rooms[3] = this._svc.roomsDefault[3];
        console.log("room reset", this.rooms[3]);
        console.log("default room", this._svc.roomsDefault[3]);
        break;
      case "105":
        this.rooms[4] = this._svc.roomsDefault[4];
        console.log("room reset", this.rooms[4]);
        console.log("default room", this._svc.roomsDefault[4]);
        break;
      case "106":
        this.rooms[5] = this._svc.roomsDefault[5];
        console.log("room reset", this.rooms[5]);
        console.log("default room", this._svc.roomsDefault[5]);
        break;
      case "107":
        this.rooms[6] = this._svc.roomsDefault[6];
        console.log("room reset", this.rooms[6]);
        console.log("default room", this._svc.roomsDefault[6]);
        break;
    }
  }
}

