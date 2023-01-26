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
  
  
  create(subscriber: Subscribe) {
    const jsonSubscriber = JSON.stringify(subscriber);

    return this.httpClient.post<Subscribe>(this.url + '/Create', jsonSubscriber, {headers: new HttpHeaders(this.header)});
  }

  getAll(){
    let list = this.httpClient.get<any[]>(this.url + '/Getall') 
    return list
  }

  async confirm(list: string[]){
    const body = { ids: list };
    const jsonBody = JSON.stringify(body);
    await this.httpClient.put(this.url + '/Confirm', jsonBody, { headers: new HttpHeaders(this.header), responseType: 'text' })
    .subscribe({error: error => {
      console.error('There was an error!', error);
    }});
  }

}
