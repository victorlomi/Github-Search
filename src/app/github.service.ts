import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Users} from './users';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // This class is for handling all http requests to github
  // It has methods that can be used to request all required information

  // this is the base api url, append specific things after
  // example: api + '/search/repositories?q=Pizza%20Panda' + '&access_token=' + apiKey
  private API = 'https://api.github.com';
  private API_KEY = environment.apiKey;

  private API_URLS = {
    users: `${this.API}/search/users?q=`,
    token: `&access_token=${this.API_KEY}`
  };

  constructor(
    private http: HttpClient
  ) { }

  private getUsersObservable(query: string): Observable<Users>{
    // returns observable with http response
    const request = this.API_URLS.users + query + this.API_URLS.token;
    return this.http.get<Users>(request);
  }

  getUsers(query: string): void {
    // returns the actual users object
    // This function subscribes to the getUsersObservable()
    const users = this.getUsersObservable(query).pipe(
      tap(_ => console.log('Fetched data')),
    );

    const subscribe = users.subscribe(val => console.log(val));
  }
}
