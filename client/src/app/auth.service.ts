import { Injectable } from '@angular/core';
import {User} from './user';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/';
  private userUrl = 'user/';
  private authUrl = 'auth/';
  private loginUrl = 'login';
  private signupUrl = 'signup';
  private tokenKey = 'MongoProjet';

  private user: User;

  constructor(private http: Http) { }

  private store(token: string) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  private retrieve(): string {
    const storedToken: string = JSON.parse(localStorage.getItem(this.tokenKey));
    if (!storedToken) {
      throw new Error('no token found');
    }
    return storedToken;
  }

  login(user: User): Promise<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + this.authUrl + this.loginUrl,
      JSON.stringify(user), {headers: headers} ).toPromise().then(
      response => { this.user = response.json() as User;
        this.store(this.user.token);
        console.log(this);
        return this.user; }
    ).catch(this.handleError);
  }

  signUp(user: User): Promise<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + this.authUrl + this.signupUrl, JSON.stringify(user), {headers: headers}).toPromise().then(
        response => {
          this.user = response.json() as User;
          this.store(this.user.token);
          console.log(this.user);
          return this.user;
      }
    ).catch(this.handleError);
  }

  getCurrentUser(): Promise<User> {
    console.log(this.user);
    if (this.user === undefined) {
      const token = this.retrieve();
      return this.http.get(this.baseUrl + this.authUrl + 'isAuth/' + token).toPromise().then(response => {
        this.user = response.json() as User;
        console.log(this.user);
        return this.user;
        }
      );
    }
  }

  getCurrentToken(): string {
    return this.user.token;
  }

  isLoggedIn(): boolean {
    console.log(this.user);
    return this.user !== undefined;
  }

  logout(): void {
    localStorage.clear();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
