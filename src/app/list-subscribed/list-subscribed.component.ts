import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-list-subscribed',
  templateUrl: './list-subscribed.component.html',
  styleUrls: ['./list-subscribed.component.css']
})
export class ListSubscribedComponent implements OnInit {

  constructor(private service: SubscribeService, private router: Router) {
  }

  ngOnInit(): void {
    const list = this.service.getAll();
  }

  confirmSubscribe(){ alert('Incrições confirmadas')}

}
