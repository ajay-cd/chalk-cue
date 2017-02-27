import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { Navigation } from "./navigation/navigation.component";
import { Signup } from "./signup/signup.component";

@NgModule({
    declarations: [
    	AppComponent,
    	Navigation,
    	Signup
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent, Navigation, Signup]
})
export class AppModule {

}