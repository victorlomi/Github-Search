import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  currentSearch: string;
  constructor() { }

  get(): string {
    return this.currentSearch;
  }

  set(value): void {
    this.currentSearch = value;
  }
}
