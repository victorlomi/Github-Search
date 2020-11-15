import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
