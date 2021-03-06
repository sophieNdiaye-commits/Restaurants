import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule, 
  IonicModule.forRoot(),
   AppRoutingModule,
  HttpClientModule, 
 ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
