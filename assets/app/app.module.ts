import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { Navigation } from "./navigation/navigation.component";
import { Signup } from "./signup/signup.component";
// import { ChartSelector } from "./dashboard/chart-selector";
import { Dashboard } from "./dashboard/dashboard.component";
import {nvD3} from 'ng2-nvd3/lib/ng2-nvd3';

@NgModule({
    declarations: [
    	AppComponent,
    	Navigation,
    	Signup,
    	nvD3,
    	Dashboard
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent, Navigation, Signup, Dashboard]
})
export class AppModule {

}