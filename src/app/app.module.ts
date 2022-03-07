import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

//Customs modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'swiper/angular';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

const firebaseConfig = {
  apiKey: "AIzaSyDcRXC2Rh0cZce9wizs81Mbcnzf3gydO8o",
  authDomain: "movie-app-a8f06.firebaseapp.com",
  projectId: "movie-app-a8f06",
  storageBucket: "movie-app-a8f06.appspot.com",
  messagingSenderId: "948694054875",
  appId: "1:948694054875:web:b8937643ffe173ce79d9fe"
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PelisComponent,
    SearcherComponent,
    SlideshowComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
