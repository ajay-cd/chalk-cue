import { NgModule } 			            from '@angular/core';
import { BrowserModule } 		            from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from "@angular/http";

import { routing } 				            from "./app.routing";
import { AppComponent } 		            from './app.component';
import { HomeComponent }                    from './home/home.component';
import { SigninComponent }		            from './auth/signin/signin.component';
import { SignupComponent } 		            from './auth/signup/signup.component';
import { AuthenticationComponent }          from "./auth/authentication.component";
import { AuthService }                      from "./auth/auth.service";
import { NavigationComponent } 	            from './navigation/navigation.component';
import { DashboardComponent } 	            from './dashboard/dashboard.component';
import { ListingsComponent }                from './listings/listings.component';
import { nvD3 } 				            from 'ng2-nvd3/lib/ng2-nvd3';

@NgModule({
    declarations: [
    	AppComponent,
        HomeComponent,
        AuthenticationComponent,
    	SigninComponent,
    	SignupComponent,
        NavigationComponent,
    	DashboardComponent,
    	ListingsComponent,
        nvD3
    ],
    imports: [
    	BrowserModule,
    	FormsModule,
        ReactiveFormsModule,
    	routing,
        HttpModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
