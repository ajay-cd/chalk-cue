import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class Navigation {
	private LOGO = require('/Users/SaiKadle/Downloads/template/assets/app/navigation/assets/company_logo.png');

	agentFname = "Sai";
	agentLname = "Kadle"

}