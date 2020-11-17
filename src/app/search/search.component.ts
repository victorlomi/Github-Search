import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SearchService} from '../search.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;
  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data): void {
    // update the search service with the new and current search
    this.searchService.set(data.search);
    if (this.searchService.get() === '') {
      alert(`You entered an empty string, please enter a valid search query.`);
    } else {
      // check what page you're inside to determine decision
      // if inside the homepage route then redirect
      if (this.router.url === '/') {
        // route to the results page, passing in users route with the page number at 1
        console.log(this.router.url);
        this.router.navigate(['users', 1]);
      }
    }
  }

}
