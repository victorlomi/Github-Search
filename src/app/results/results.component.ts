import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    console.log(this.searchService.get());
  }

}
