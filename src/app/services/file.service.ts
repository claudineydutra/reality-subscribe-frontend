import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private url: string = 'https://localhost:44372/api/File';

  create(file: any){
    let result = this.httpClient.post<any>(this.url + '/Create', file);
    return result;
  }

}
