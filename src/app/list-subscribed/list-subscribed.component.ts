import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscribe } from '../interfaces/subscribe';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-list-subscribed',
  templateUrl: './list-subscribed.component.html',
  styleUrls: ['./list-subscribed.component.css']
})
export class ListSubscribedComponent implements OnInit {

  constructor(private service: SubscribeService, private router: Router) {
  }

  public list: any[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.getAll().subscribe((subs: any[])=>{
      let x: any = subs;
      this.list = x.inscricaoResult;
      console.log(this.list);
      
    });
  }
  
  async confirmSubscribe(){ 
    console.log(this.list)
    let listIds: string[] = [];
    this.list.forEach(item => {
      if(item.stage){
        item.stage = false;
        listIds.push(item.id);
      }
    });
    await this.service.confirm(listIds);
    alert('Inscrições confirmadas !!!')
    window.location.reload();
  }

} 
