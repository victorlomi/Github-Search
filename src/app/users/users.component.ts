import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import {SearchService} from '../search.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  totalCount: number;
  users: User[];
  pageNumber;
  constructor(
    private githubService: GithubService,
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.githubService.getUsers(this.searchService.get()).subscribe({
      next: value => {
        this.totalCount = value.total_count;
      }
    });

    this.githubService.getUsersFromPage(this.searchService.get(), 1).subscribe({
      next: value => {
        this.users = value.items;
      }
    });

    // get the page number from url
    this.pageNumber = this.router.url[this.router.url.length - 1];
  }

  search(): void {
    console.log('searching');
    this.githubService.getUsers(this.searchService.get()).subscribe({
      next: value => {
        this.totalCount = value.total_count;
      }
    });

    this.githubService.getUsersFromPage(this.searchService.get(), 1).subscribe({
      next: value => {
        this.users = value.items;
        console.log(this.users);
      }
    });
  }

}
