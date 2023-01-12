import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
