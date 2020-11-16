import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import {SearchService} from '../search.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  totalCount: number;
  users: User[];
  constructor(
    private githubService: GithubService,
    private searchService: SearchService
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
        console.log(this.users);
      }
    });
  }

}
