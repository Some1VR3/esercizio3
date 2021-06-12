import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  @Input() movie:any;
  @Output() movieupdated = new EventEmitter<any>()
  mymovie:any
  constructor() { }
resetMovie(){
this.mymovie = Object.assign({}, this.movie)
  }

  update(){
    this.movieupdated.emit(this.mymovie);
  console.log('prova');
}
ngOnInit(): void {
  this.resetMovie();
  }

}
