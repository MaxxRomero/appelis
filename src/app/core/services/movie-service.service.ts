import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { debounceTime, first, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  API_KEY: string = "api_key=51d7559976c796f7a4f3340f638512da";
  url: string = 'https://api.themoviedb.org/3/movie';
  urlImg: string = 'http://image.tmdb.org/t/p/w500';

  constructor(private _http: HttpClient) { }

  getMovies(page: number): Observable<Movie[]> {
    console.log('Llamando a la API'); 

    //falta optimizar multiples llamadas o desuscribirse de las llamadas al llegar al top de la pag

    return this._http
    .get<any>(`${this.url}/popular?${this.API_KEY}&language=en-US&page=${page}`)
    .pipe(
    debounceTime(600),
    take(1),
    map(resp => resp.results));
  }

  getLatest(): Observable<any>{
    return this._http
    .get<any>(`${this.url}/latest?${this.API_KEY}&language=en-US`)
  }



}
