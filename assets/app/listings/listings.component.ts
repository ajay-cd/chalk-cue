import { Component, ViewChild, ViewEncapsulation } 	from '@angular/core';

@Component({
    selector: 'listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.css']
})

export class ListingsComponent {

	private placeholder = require('./assets/company_logo.png');

	public timings: any[] = [
		{"timing" : "12 AM"},{"timing" : "1 AM"},{"timing" : "2 AM"},{"timing" : "3 AM"},{"timing" : "4 AM"},{"timing" : "5 AM"},{"timing" : "6 AM"},{"timing" : "7 AM"},{"timing" : "8 AM"},{"timing" : "9 AM"},{"timing" : "10 AM"}, {"timing" : "11 AM"},
		{"timing" : "12 PM"},{"timing" : "1 PM"},{"timing" : "2 PM"},{"timing" : "3 PM"},{"timing" : "4 PM"},{"timing" : "5 PM"},{"timing" : "6 PM"},{"timing" : "7 PM"},{"timing" : "8 PM"},{"timing" : "9 PM"},{"timing" : "10 PM"}, {"timing" : "11 PM"}
	]

	public listings: any[] = [
	{
		"name" : "Sai",
		"stage" : "For Sale",
		"clientsReached" : "23000",
		"address": "Eastgate mAll, San Diego"
	},
	{
		"name" : "Ajay",
		"stage" : "Just Listed",
		"clientsReached" : "2000",
		"address": "Eastgate mAll, San Diego"
	},
	{
		"name" : "Sai",
		"stage" : "Sold",
		"clientsReached" : "1110",
		"address": "Eastgate mAll, San Diego"
	},
	{
		"name" : "Sai",
		"stage" : "Completed",
		"clientsReached" : "130",
		"address": "Eastgate mAll, San Diego"
	},
	{
		"name" : "Sai",
		"stage" : "Not Running",
		"clientsReached" : "0",
		"address": "Eastgate mAll, San Diego"
	}
]


	// constructor(public dialog: MdDialog){}

	// selectedOption: string;
	// openDialog() {
 //    let dialogRef = this.dialog.open(DialogResultExampleDialog);
 //    dialogRef.afterClosed().subscribe(result => {
 //      this.selectedOption = result;
 //    });
 //  }



}

// @Component({
//   selector: 'dialog-result-example-dialog',
//   templateUrl: `
//   <h1>Hie Example </h1>
//   `
// })
// export class DialogResultExampleDialog {
//   constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
// }