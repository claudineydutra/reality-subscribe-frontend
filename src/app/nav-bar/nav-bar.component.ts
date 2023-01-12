import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.usuarioService.navbar.subscribe(
      isLogged => this.isLoggedIn = isLogged
    );
  }

  deslogar(){
    this.isLoggedIn = false;
    window.location.reload();
  }

}
