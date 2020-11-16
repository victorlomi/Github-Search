import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;
  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
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
  }

}
