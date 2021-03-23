import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../services/data-service.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstName:any;
  lastName:any;
  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

   getCurrentUser()
  {
   
    this.dataService.getUser().subscribe(
      (data =>    {              
        if (data != undefined && data != null && Object.keys(data).length > 0){
          for (var i in data) {         
            this.firstName = data[i].firstName; 
            this.lastName = data[i].lastName;         
        }
      }else
      {
        alert("sesion expirada");
      }
    }  
      ),( (error) => {           
  
        if(error['status'] == undefined){
                
          this.router.navigate(['login']);
         } 
      }));
     
}
}
