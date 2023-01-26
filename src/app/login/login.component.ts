import * as core from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { IResponseAuth } from '../interfaces/iresponse-auth';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@core.Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements core.OnInit {

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
    this.responseAuth = this.usuarioService.logar(form.value);
  }

  
  ngOnInit(): void {
  }

}
