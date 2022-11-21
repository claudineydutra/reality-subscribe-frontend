import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    name: "",
    password: ""
  }

  onSubmit(form: any){
    console.log(form.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
