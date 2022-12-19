import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IUser} from '../interfaces/iuser'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'https://localhost:44372/api/Auth';
  constructor(private httpClient: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  logar(user: IUser) {
    return this.httpClient.post(this.url + '/Login',
    JSON.stringify(user),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  register(user: IUser) {
    return this.httpClient.post(this.url + '/Register',
    JSON.stringify(user),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
