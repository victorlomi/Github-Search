import { Component } from '@angular/core';
import {GithubService} from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: number;
  constructor(
    private githubService: GithubService
  ) {
  }
  ngOnInit() {
    this.githubService.getUsers('victor').subscribe({
      next: value => {
        this.results = value.total_count;
        console.log(value.total_count);
        console.log(this.results);
      }
    });
  }
}
