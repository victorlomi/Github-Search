import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { CommaSeparatePipe } from './comma-separate.pipe';
import { LanguageColorPipe } from './language-color.pipe';
import { MakeCircularDirective } from './make-circular.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent,
    ResultsComponent,
    UsersComponent,
    RepositoriesComponent,
    UserComponent,
    RepositoryComponent,
    CommaSeparatePipe,
    LanguageColorPipe,
    MakeCircularDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
