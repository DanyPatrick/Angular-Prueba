import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  usuario : string = "";
  apellido : string = "";
  token:any ;
  list : any;
  
  constructor(private router: Router,private httpClient: HttpClient,private cookies: CookieService) { }

  getToken(user:any, pass:any){   
    let url = "http://161.35.140.236:9005/api/auth/login";    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(url, {
      "username": user,
      "password": pass
    }, {headers: headers});
  }
 
  getMovies(){   
    return this.usuario + this.apellido;
}

setToken(token: any) {
  this.cookies.set("token", token);
}
getToken2() {
  return this.cookies.get("token");
}
 getUser()
{
  let url = "http://161.35.140.236:9005/api/user/me";    
  const httpOptions = { headers: new HttpHeaders({'Authorization': 'Bearer '+this.getToken2()})};
  return this.httpClient.get<any[]>(url,httpOptions).pipe(catchError((error: HttpErrorResponse) => { return throwError(    this.router.navigate(['page']));})); //url


}
getPopularMovies()
{
  let url = "http://161.35.140.236:9005/api/movies/popular";    
  const httpOptions = { headers: new HttpHeaders({'Authorization': 'Bearer '+this.getToken2()})};
  return this.httpClient.get<any[]>(url,httpOptions).pipe(catchError((error: HttpErrorResponse) => { return throwError( error);})); //url



}
getNowPlaying()
{
  let url = "http://161.35.140.236:9005/api/movies/now_playing";    
  const httpOptions = { headers: new HttpHeaders({'Authorization': 'Bearer '+this.getToken2()})};
  return this.httpClient.get<any[]>(url,httpOptions).pipe(catchError((error: HttpErrorResponse) => { return throwError( error);})); //url

  

}

getActors(id:any)
{
 
  let url = "http://161.35.140.236:9005/api/movies/"+id+"/actors";    
  const httpOptions = { headers: new HttpHeaders({'Authorization': 'Bearer '+this.getToken2()})};
  return this.httpClient.get<any[]>(url,httpOptions).pipe(catchError((error: HttpErrorResponse) => { return throwError( error);})); //url

  
   
}
}


