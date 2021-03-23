import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  arreglo1 : any[] = [];
  list : any[] = [];



  constructor(public dataService: DataService,private router: Router, private route: ActivatedRoute) {
  
  }
  ngOnInit(): void {
    this.getMovies();
    this.getNow();
  }

  getMovies()
  {
   
    this.dataService.getPopularMovies().subscribe(
      (data =>    {                 
        if (data != undefined && data != null && Object.keys(data).length > 0){
          for (var i in data) {     
            
            for (var e in data[i]) {   
              if(data[i][e].backdrop_path != undefined)
              {
               this.arreglo1.push([data["imageBaseUrl"]+data[i][e].poster_path, data[i][e].title]);
              }   
            }      
        }
      }else
      {
        alert("sesion expirada")
      }
    }     
      ))
     
}

getNow()
{
 
  this.dataService.getNowPlaying().subscribe(
    (data =>    {                 
      if (data != undefined && data != null && Object.keys(data).length > 0){
        for (var i in data) {     
          for (var e in data[i]) {
               
            if(data[i][e].backdrop_path != undefined)
            {
             this.list.push(data["imageBaseUrl"]+data[i][e].backdrop_path);
            }   
          }   
        } 

    }
  }     
    ))
   
}
view(id:any)
  {
    this.router.navigate(['../details',id], { relativeTo: this.route });
  }

}
