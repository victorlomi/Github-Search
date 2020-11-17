import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {GithubService} from '../github.service';
import {SearchService} from '../search.service';
import {Repositories} from '../repositories';
import {Repository} from '../repository';
import {Router} from '@angular/router';

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
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.githubService.getRepositories(this.searchService.get()).subscribe({
      next: value => {
        this.totalCount = value.total_count;
        this.repositories = value.items;
      }
    });

    // get the page number from url
    this.pageNumber = this.router.url[this.router.url.length - 1];
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
