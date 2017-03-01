import { Routes, RouterModule } 	from '@angular/router';
import { HomeComponent }			from './home/home.component';
import { AuthenticationComponent } 	from './auth/authentication.component';
import { ListingsComponent }		from './listings/listings.component';
import { AUTH_ROUTES } 				from './auth/auth.routes';
const appRoutes: Routes = [
<<<<<<< Updated upstream
	{ path: 'home', component: HomeComponent },
	{ path: 'listings', component: ListingsComponent },
=======
	{ path: '', component: HomeComponent },
>>>>>>> Stashed changes
	{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
	{ path: '', redirectTo: '', pathMatch: 'full' },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot( appRoutes );