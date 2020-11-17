import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {GithubService} from '../github.service';
import {SearchService} from '../search.service';
import {Repositories} from '../repositories';
import {Repository} from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  totalCount: number;
  repositories: Repository[];
  pageNumber;
  constructor(
    private githubService: GithubService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.githubService.getRepositories(this.searchService.get()).subscribe({
      next: value => {
        this.totalCount = value.total_count;
        this.repositories = value.items;
      }
    });
  }

  search(): void {
    this.githubService.getRepositories(this.searchService.get()).subscribe({
      next: value => {
        this.totalCount = value.total_count;
        this.repositories = value.items;
      }
    });
  }
}
