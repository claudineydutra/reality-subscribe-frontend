import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscribe } from '../interfaces/subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private url: string = 'https://localhost:44372/api/Inscricao';

  private header = { 'content-type': 'application/json'};



  getAll(): Subscribe[]{
    let lista: any;
    this.httpClient.get(this.url + '/Getall', { headers: new HttpHeaders(this.header), responseType: 'text' })
    .subscribe((response)=>{
        lista = JSON.parse(response) as Subscribe[];
      });
      return lista;
  }

}
