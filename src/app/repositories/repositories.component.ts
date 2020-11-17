import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {GithubService} from '../github.service';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
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
