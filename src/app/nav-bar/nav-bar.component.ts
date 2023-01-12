import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService){}

  public isLoggedIn = this.usuarioService.responseAuth.hasLogin;
  ngOnInit(): void {
  }

  deslogar(){
    this.usuarioService.deslogar()
    window.location.reload();
  }

}
