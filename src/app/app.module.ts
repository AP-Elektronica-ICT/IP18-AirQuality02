import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { NavComponent } from './Nav/Nav.component';
import { HomeComponent } from './Home/Home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MapViewComponent } from './map-view/map-view.component';
import { DataComponentComponent } from './data-component/data-component.component';
import { DataComponent } from './data/data.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent,
    HomeComponent,
    LogInComponent,
    MapViewComponent,
    DataComponentComponent,
    DataComponent,
    SettingsComponent,
    AdminSettingsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},      
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "**", component: PageNotFoundComponent},
      { path: "mapview", component: MapViewComponent}     
    ], {useHash: true})
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
