import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any;
  list : any[] = [];
  imagePort:any;
  poster:any;
  title:any;
  resume:any;
  imageActor:any;
  nameActor:any;
  constructor(public dataService: DataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get("id");
     this.getMovies();
    
  }

  getMovies()
  {
   
    this.dataService.getPopularMovies().subscribe(
      (data =>    {                 
        if (data != undefined && data != null && Object.keys(data).length > 0){
            this.imagePort = data["imageBaseUrl"] + data["data"][ this.id].backdrop_path;
            this.poster = data["imageBaseUrl"] + data["data"][ this.id].poster_path;
            this.title = data["data"][ this.id].original_title;
            this.resume = data["data"][ this.id].overview;
            this.getActors(data["data"][ this.id].id);
           
        
      }
    }     
      ));

     
}
getActors(id:any)
{
 
  this.dataService.getActors(id).subscribe(
    (data =>    {                 
      if (data != undefined && data != null && Object.keys(data).length > 0){
        for (var i in data) {     
         
          for (var e in data[i]) {   
 
            if(data[i][e].profile_path != undefined)
            {
             this.list.push([data["imageBaseUrl"]+data[i][e].profile_path, data[i][e].name]);
            }   
          }      
      }

     
      
    }
  }     
    ));

   
}
}
