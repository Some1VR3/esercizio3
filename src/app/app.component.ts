import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

import { MOVIES } from './mock-movies';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  movies: Array<Movie> = MOVIES;
  title = 'esercizio3';
  selected = 'list';
  selectedMovie: any;
  lastId: any;
  cambia(type) {
    this.selected = type;
  }

  findMovie(id: any) {
    var movie;
    for (let i = 0; i < this.movies.length; i++) {
      if (id === this.movies[i].id) {
        movie = this.movies[i];
      }
    }
    return movie;

  }

  mostraMovie(id: any) {
    this.selectedMovie = this.findMovie(id);
    this.selected = 'detail';

    console.log(id);
  }


  updateMovie(movie: any) {
    console.log(movie);
    let index = this.movies.findIndex((value) => {
      return value.id === movie.id;
    });
    for (let prop in movie) {
      this.movies[index][prop] = movie[prop];
    }
  }
  editDetail(movieId: any) {
    console.log(movieId);
    this.selectedMovie = this.movies.find((value) => {
      return value.id === movieId;
    });
    this.selected = 'edit';
  }
  createMovie(movie){
    movie.image = 'assets/images/' + movie.image;
    this.movies.push(movie);
    this.selected = "list";
  }
  ngOnInit(){
     this.lastId = Math.max(...this.movies.map((val) => val.id));
}
}