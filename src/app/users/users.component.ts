import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  totalCount;
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
  }

}
