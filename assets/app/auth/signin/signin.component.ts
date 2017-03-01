import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
	selector: 'login',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})

export class SigninComponent {
    myForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.myForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        console.log('inside onSubmit function.');
        const username = this.myForm.value.username;
        const password = this.myForm.value.password;

        this.authService.login( username, password )
            .subscribe(
                data => {
                    if ( data ) {
                        localStorage.setItem( 'auth_token', data.auth_token );
                        localStorage.setItem( 'userProfile', data.userProfile );
                        this.router.navigate(['/listings']);
                        
                        console.log("set up a flash message");
                        console.log("Signed in, successfully.");
                    }

                },
                error => console.error(error)
            );
        this.myForm.reset();
    }

}