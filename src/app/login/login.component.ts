import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  pass: any; 
  token :any;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  login()
{
  this.dataService.getToken(this.user,this.pass).subscribe((async (data: any[]) => { 

    if (data != undefined && data != null && Object.keys(data).length > 0){
      for (var i in data) {         
        this.token = data[i].payload.token; 
    }
    this.dataService.setToken(this.token) ;
    this.router.navigate(['page']);
    }
   }));

}

}
