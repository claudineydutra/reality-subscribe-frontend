import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscribe } from '../interfaces/subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private url: string = 'https://localhost:44372/api/Inscricao';

  private header = { 'content-type': 'application/json'};



  getAll(): Observable<Subscribe[]>{
    return this.httpClient.get<Subscribe[]>(this.url + '/Getall')
  }

  confirm(list: string[]){
    const body = { ids: list };
    const jsonBody = JSON.stringify(body);
    this.httpClient.put(this.url + '/Confirm', jsonBody, { headers: new HttpHeaders(this.header), responseType: 'text' })
    .subscribe({error: error => {
      console.error('There was an error!', error);
    }});
  }

}
