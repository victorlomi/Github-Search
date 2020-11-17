import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Users} from './users';
import {User} from './user';
import {Repositories} from './repositories';

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
    repositories: `${this.API}/search/repositories?q=`,
    token: `&access_token=${this.API_KEY}`
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(query: string): Observable<Users>{
    // returns observable with http response
    const request = this.API_URLS.users + query + this.API_URLS.token;
    return this.http.get<Users>(request);
  }

  getUsersFromPage(query: string, page: number): Observable<Users> {
    // returns observable with http response
    const request = this.API_URLS.users + query + this.API_URLS.token + `&page=${page}`;
    return this.http.get<Users>(request);
  }

  getUserInformation(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getRepositories(query: string): Observable<Repositories> {
    const request = this.API_URLS.repositories + query + this.API_URLS.token;
    return this.http.get<Repositories>(request);
  }

  getUserRepositories(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
