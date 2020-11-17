import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import {SearchService} from '../search.service';
import {Repository} from '../repository';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  repositories: Repository[];
  users: User[];
  user: User;
  userInformation: object;

  constructor(
    private githubService: GithubService,
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // update search with route name
    this.searchService.set(this.getLoginName());

    // get the user object
    this.githubService.getUsers(this.searchService.get()).subscribe({
      next: value => {
        value.items.forEach(item => {
          if (item.login === this.getLoginName()) {
            this.user = item;
          }
        });
        this.getRepositories();
        this.getInformation(this.user.url);
      }
    });
  }

  getRepositories(): void {
    this.githubService.getUserRepositories(this.user.repos_url).subscribe({
      next: value => {
        console.log(value);
        this.repositories = value;
      }
    });
  }

  getInformation(url: string): void {
    this.githubService.getUserInformation(url).subscribe({
      next: value => {
        this.userInformation = value;
      }
    });
  }

  getLoginName(): string {
    const login = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    return login;
  }

}
