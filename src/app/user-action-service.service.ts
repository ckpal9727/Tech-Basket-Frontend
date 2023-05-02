import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserActionServiceService {
  url:string = 'https://localhost:7165/user/action';
  headers:object = { 'Content-Type': 'application/json' };

  constructor(private httpClient:HttpClient,private router: Router) { }

  addProductAdmin(data:any){
    console.log(data);
    var result=this.httpClient.post('https://localhost:7165/api/product',data,this.headers);
    this.router.navigate(['/admin']);
    return result;
  }
  saveUser(data:any){
    console.log(data);
    var result= this.httpClient.post(this.url,data,this.headers);
    this.router.navigate(['/']);
    return result;
  }
  loginUser(data:any){
    // const header = { 'Content-Type': 'application/json' };
    // const params=new HttpParams().set('email','ck7@me.com').set('password','12');
    // const option={header,params};
    var result=this.httpClient.post('https://localhost:7165/user/action/login',data,this.headers);
    this.router.navigate(['/']);
    console.log(result);
     return result;
  }
  
}
