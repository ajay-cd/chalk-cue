import { Injectable }                from '@angular/core';
import { Http, Headers, Response, RequestOptions }   from '@angular/http';
import 'rxjs/Rx';
import { Observable }                from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login( username, password ) {
    const body = JSON.stringify({ username: username, password: password });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/auth/signin', body, options )
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error || 'Server error'));
  }
  
  logout() {
    localStorage.clear();
    this.loggedIn = false;
  }

  isLoggedIn() {
    return localStorage.getItem('auth_token') !== null;
  }
}