import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  canActivate() {
    if(this.usuarioService.logado()){
      this.router.navigate(['list-subscribed']);
      return false;
    }
    return true;
  }
}
