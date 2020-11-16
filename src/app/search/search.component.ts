import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SearchService} from '../search.service';
import { Router } from '@angular/router';

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
    private router: Router
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
    alert(`You submitted ${this.searchService.get()}`);

    // route to the results page, passing in users route with the page number at 1
    this.router.navigate(['users', 1]);
  }

}
