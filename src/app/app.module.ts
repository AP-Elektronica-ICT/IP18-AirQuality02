import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { NavComponent } from './Nav/Nav.component';
import { HomeComponent } from './Home/Home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MapViewComponent } from './map-view/map-view.component';
import { DataComponent } from './data/data.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { DetailedDataComponent } from './detailed-data/detailed-data.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVFb-O5xNQt6BnDGb2e8OUqVYxqEwIh5o",
  authDomain: "airquality-cb69a.firebaseapp.com",
  databaseURL: "https://airquality-cb69a.firebaseio.com",
  projectId: "airquality-cb69a",
  storageBucket: "airquality-cb69a.appspot.com",
  messagingSenderId: "59137669043"
};

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent,
    HomeComponent,
    LogInComponent,
    MapViewComponent,
    DataComponent,
    SettingsComponent,
    AdminSettingsComponent,
    DetailedDataComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      /*{ path: "**", component: PageNotFoundComponent},*/
      { path: "map", component: MapViewComponent },
      { path: "data", component: DataComponent },
      { path: "settings", component: SettingsComponent },
      { path: "admin", component: AdminSettingsComponent }
    ], { useHash: true })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
