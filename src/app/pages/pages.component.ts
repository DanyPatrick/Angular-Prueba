import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { DataService } from '../services/data-service.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private httpClient: HttpClient, private dataService:DataService) { }

  ngOnInit(): void {

  //  this.dataService.getUser().subscribe((async (data: any[]) => { }));
  
  }

}
