import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service";
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  type:any;
  id:any;
  movieDetails:any;
  imgPrfix:string = "https://image.tmdb.org/t/p/w500";
  constructor( private _MoviesService:MoviesService , private _ActivatedRoute:ActivatedRoute) { 


    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesService.getItemDetails(this.type , this.id).subscribe((data)=>{
      this.movieDetails = data;
    })

  }



  ngOnInit(): void {
  }

}
