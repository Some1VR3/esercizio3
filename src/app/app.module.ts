import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RentMovieComponent } from './rent-movie/rent-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    RentMovieComponent,
    MovieDetailComponent,
    EditMovieComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
