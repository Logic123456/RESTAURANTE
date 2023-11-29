import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './pages/components/notifications/notifications.component';
import { AddressComponent } from './pages/components/address/address.component';
import { CoupanComponent } from './pages/components/coupan/coupan.component';
import { AddItemsComponent } from './pages/components/add-items/add-items.component';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';


import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
@NgModule({
    declarations: [AppComponent,AddItemsComponent, NotificationsComponent,AddressComponent,CoupanComponent],
    imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [SplashScreen,StatusBar,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {}
