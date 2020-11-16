import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // this is the base api url, append specific things after
  // example: api + '/search/repositories?q=Pizza%20Panda' + '&access_token=' + apiKey
  private api = 'https://api.github.com/';
  private apiKey = environment.apiKey;

  constructor(
    private http: HttpClient
  ) { }
}
