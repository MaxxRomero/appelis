import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from 'src/app/core/models/Movie';
import { MovieServiceService } from 'src/app/core/services/movie-service.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PelisComponent implements OnInit {
  movies: Movie[];
  img: string = this.movieService.urlImg;
  counterPage: number = 2;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      this.counterPage += 1;

      this.movieService.getMovies(this.counterPage).subscribe(resp => {
        for (let i = 0; i < resp.length; i++) {
          this.movies.push(resp[i]);
        }
      })
    }
  }
  constructor(private movieService: MovieServiceService) { }


  ngOnInit() {
    this.movieService.getMovies(2).subscribe(resp => {
      this.movies = resp;
    })

  }
}
