import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data): void {
    alert(`You submitted ${data.search}`);
  }

}
