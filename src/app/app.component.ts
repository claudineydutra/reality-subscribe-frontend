import { Component, OnInit } from '@angular/core';
import {IUser} from './interfaces/iuser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reality-subscribe';

  public isLoggedIn: any;

  ngOnInit(): void {
  }

}
