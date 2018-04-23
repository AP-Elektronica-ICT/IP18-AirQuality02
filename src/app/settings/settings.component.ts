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
  preferredTemp = "10";

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
        this.rooms[0].settings.temperature.preferred = parseInt(this.preferredTemp);
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
        this.rooms[0] = this._svc.roomsDefault[0];
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

