import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrowToggle: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 1000 || document.body.scrollTop > 1000) {
      this.arrowToggle = true;
    }
    else if (this.arrowToggle && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 2000) {
      this.arrowToggle = false;
    }
  }

  scrollTop() {
    this.scroll.scrollToPosition([0,0]);
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit() {

  }

}
