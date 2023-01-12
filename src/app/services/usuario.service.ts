import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IUser} from '../interfaces/iuser'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponseAuth } from '../interfaces/iresponse-auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'https://localhost:44372/api/Auth';
  constructor(private httpClient: HttpClient, private router: Router) { }

  private header = { 'content-type': 'application/json'};

  private request!: Observable<any>;

  responseAuth: IResponseAuth = {};

  public navbar = new EventEmitter<boolean>();

  logar(user: IUser) : IResponseAuth{
    this.request = this.httpClient.post(this.url + '/Login',
    JSON.stringify(user), { headers: new HttpHeaders(this.header), responseType: 'text' });

    this.request.subscribe((response) => {
      this.responseAuth = JSON.parse(response) as IResponseAuth
      if(this.responseAuth.hasLogin){
        this.navbar.emit(true);
        this.router.navigate(['/list-subscribed']);
      }else{
        alert(this.responseAuth.message)
      }
    }, error =>{
      console.log('Error' + error);
    })

    return this.responseAuth;
  }

  register(user: IUser) {
    this.request = this.httpClient.post(this.url + '/Register',
    JSON.stringify(user), { headers: new HttpHeaders(this.header), responseType: 'text' });

    this.request.subscribe((response) => {
      this.responseAuth = JSON.parse(response) as IResponseAuth
      if(this.responseAuth.hasLogin){
        this.navbar.emit(true);
        this.router.navigate(['/list-subscribed']);
      }else{
        alert(this.responseAuth.message)
      }
    }, error =>{
      console.log('Error' + error);
    })

    return this.responseAuth;
  }
  
  deslogar() {
    this.responseAuth.hasLogin = false;
    this.router.navigate(['login']);
  }

  logado(){
    return this.responseAuth.hasLogin;
  }

}
