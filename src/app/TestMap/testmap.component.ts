import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testmap',
  templateUrl: './testmap.component.html',
  styleUrls: ['./testmap.component.scss']
})
export class TestMapComponent implements OnInit {

  data: Object[];

  constructor() { 
    this.data = [
      {
        room: 101,
        temperature: 25,
        humidity: 40,
        co2: 700,
        sound: 85,
        illuminantie: 80,
        hide: true
      },
      {
        room: 102,
        temperature: 20,
        humidity: 60,
        co2: 500,
        sound: 65,
        illuminantie: 90,
        hide: true
      },
      {
        room: 103,
        temperature: 23,
        humidity: 30,
        co2: 800,
        sound: 70,
        illuminantie: 20,
        hide: true
      },
      {
        room: 104,
        temperature: 20,
        humidity: 10,
        co2: 300,
        sound: 20,
        illuminantie: 100,
        hide: true
      },
      {
        room: 105,
        temperature: 19,
        humidity: 90,
        co2: 1000,
        sound: 30,
        illuminantie: 10,
        hide: true
      }
    ]
  }

  ngOnInit() {
  }

  showData(room: number){
      
  }

}
