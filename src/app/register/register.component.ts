import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { IResponseAuth } from '../interfaces/iresponse-auth';
import { IUser } from '../interfaces/iuser';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  router: Router;
  user: IUser = {
    email: "",
    senha: ""
  }
  responseAuth: IResponseAuth = {}

  constructor( private usuarioService: UsuarioService, router: Router) {
    this.router = router;
  }

  onSubmit(form: any){
    this.responseAuth = this.usuarioService.register(form.value);
  }


  ngOnInit(): void {
  }

}
