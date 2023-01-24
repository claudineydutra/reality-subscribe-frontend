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

  static responseAuth: IResponseAuth = {};

  public navbar = new EventEmitter<boolean>();

  logar(user: IUser) : IResponseAuth{
    const userJson = JSON.stringify(user);
    this.request = this.httpClient.post(this.url + '/Login',
    userJson, { headers: new HttpHeaders(this.header), responseType: 'text' });

    this.request.subscribe((response) => {
      UsuarioService.responseAuth = JSON.parse(response) as IResponseAuth
      if(UsuarioService.responseAuth.hasLogin){
        this.saveStorage(UsuarioService.responseAuth);        
        this.navbar.emit(true);
        window.location.reload();
        this.router.navigate(['/list-subscribed']);
      }else{
        alert(UsuarioService.responseAuth.message)
      }
    }, error =>{
      console.log('Error' + error);
    })

    return UsuarioService.responseAuth;
  }

  register(user: IUser) {
    this.request = this.httpClient.post(this.url + '/Register',
    JSON.stringify(user), { headers: new HttpHeaders(this.header), responseType: 'text' });

    this.request.subscribe((response) => {
      UsuarioService.responseAuth = JSON.parse(response) as IResponseAuth
      if(UsuarioService.responseAuth.hasLogin){
        this.saveStorage(UsuarioService.responseAuth);
        this.navbar.emit(true);
        window.location.reload();
        this.router.navigate(['/list-subscribed']);
      }else{
        alert(UsuarioService.responseAuth.message)
      }
    }, error =>{
      console.log('Error' + error);
    })

    return UsuarioService.responseAuth;
  }
  
  deslogar() {
    localStorage.clear();
  }

  logado(){
    const loginJson = localStorage.getItem('login');
    UsuarioService.responseAuth = loginJson != null ? JSON.parse(loginJson) : undefined;
    if(UsuarioService.responseAuth == undefined){ return false}
    return UsuarioService.responseAuth.hasLogin;
  }

  saveStorage(object: any){
    localStorage.setItem('login', JSON.stringify(object));
  }
  

}
