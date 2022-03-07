import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/Movie';
import { MovieServiceService } from 'src/app/core/services/movie-service.service';
import Swiper from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  popular: Movie[];
  public MySwiper: Swiper;

  constructor(private movieService: MovieServiceService) { }

  ngAfterViewInit() {
    this.MySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 5,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
    });
  }
  
  ngOnInit() {
    SwiperCore.use([Autoplay]);
    
    this.movieService.getMovies(1).subscribe(resp => {
      this.popular = resp;
    });
  }
  
  onSlidePrev() {
    this.MySwiper.slidePrev();
  }

  onSlideNext() {
    this.MySwiper.slideNext();
  }

  slideshowStyles(path) {
    let img: string = this.movieService.urlImg;
    let styles = {
      'background-size': 'cover',
      'background-image': `url(${img}${path})`
    }
    return styles
  }

  movieDetail(movie){
    console.log(movie);   
  }

}
