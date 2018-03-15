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
  
  constructor(private _svc: AirQualityDataService, private route:ActivatedRoute) {
    this.rooms = _svc.rooms;
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {this.fragment = fragment});
  }
  ngAfterViewChecked(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {}
  }

  UpdateAll(){

  }
  ResetAll(){
    this.rooms = this._svc.roomsDefault;
  }

  reset(roomid){
    if(this.rooms == roomid){
      this.rooms = this._svc.roomsDefault;
    }
  }
}
