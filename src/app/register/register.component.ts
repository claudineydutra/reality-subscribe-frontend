import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: IUser = {
    username: "",
    password: ""
  }

  onSubmit(form: any){
    console.log(form.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
