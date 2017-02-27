import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
	private LOGO = require('./assets/company_logo.png');

	agentFname = "Sai";
	agentLname = "Kadle";

}