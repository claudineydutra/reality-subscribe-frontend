import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-subscribed',
  templateUrl: './list-subscribed.component.html',
  styleUrls: ['./list-subscribed.component.css']
})
export class ListSubscribedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  confirmSubscribe(){ alert('Incrições confirmadas')}

}
