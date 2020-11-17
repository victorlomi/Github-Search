import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GithubService} from '../github.service';
import {User} from '../user';
import {Repository} from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  usernameParameter: string;
  repoParameter: string;
  user: User;
  repository: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private githubService: GithubService,
  ) { }

  ngOnInit(): void {
    // get the username
    this.route.paramMap.subscribe(param => {
      this.usernameParameter = param.get('username');
      this.repoParameter = param.get('repo');
    });

    // find the correct user in order to access their repos api url
    this.githubService.getUsers(this.usernameParameter).subscribe({
      next: value => {
        console.log(value);
        value.items.forEach(item => {
          if (item.login === this.usernameParameter) {
            this.user = item;
          }
        });

        // retrieve the user's repositories
        this.getRepositories(this.user.repos_url);
      }
    });

    console.log(this.usernameParameter);
    console.log(this.repoParameter);
  }

  getRepositories(url: string): void {
    this.githubService.getRepositoryInformation(this.usernameParameter, this.repoParameter).subscribe({
      next: value => {
        this.repository = value;
      }
    });
  }
}
