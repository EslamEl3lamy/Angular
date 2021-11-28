import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  trendigMovie: any[] = [];
  trendigTv: any[] = [];
  term: any;
  imgPrfix:string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService) {

    _MoviesService.getTrending('movies').subscribe((data)=>{
      this.trendigMovie = data.results;
      // .slice(0,10)
    });

    _MoviesService.getTrending('tv').subscribe((data)=>{
      this.trendigTv = data.results;
    });

   }
  ngOnInit(): void {
  }
}
