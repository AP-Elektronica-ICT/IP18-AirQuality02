import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../[Services]/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  email: string;
  password: string;
  constructor(
    public authService: AuthService) { }

  ngOnInit() {}

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
}
