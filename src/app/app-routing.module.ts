import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  // used for pagination of users
  { path: 'users/:page_number', component: UsersComponent},
  // used for viewing individual users
  { path: 'users/:page_number/:username', component: UserComponent},
  { path: 'repositories/:page_number', component: RepositoriesComponent}
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
