import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';
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
import { HttpClientModule } from '@angular/common/http';
import { AirQualityDataService } from './[Services]/air-quality-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Signup/signup.component';
import { TestMapComponent } from './TestMap/testmap.component';


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
    DetailedDataComponent,
    SignupComponent,
    TestMapComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      /*{ path: "**", component: PageNotFoundComponent},*/
      { path: "map", component: MapViewComponent },
      { path: "data", component: DataComponent },
      { path: "settings", component: SettingsComponent },
      { path: "admin", component: AdminSettingsComponent },
      { path: "signup", component: SignupComponent },
      { path: "testmap", component: TestMapComponent}
    ], { useHash: true })
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [AirQualityDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
