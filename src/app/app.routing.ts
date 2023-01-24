import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListSubscribedComponent } from "./list-subscribed/list-subscribed.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UsuarioAutenticadoGuard } from "./services/guards/usuario-autenticado.guard";
import { UsuarioNaoAutenticadoGuard } from "./services/guards/usuario-nao-autenticado.guard";
import { SubscribeComponent } from "./subscribe/subscribe.component";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
    { path: 'register', component: RegisterComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
    { path: 'subscribe', component: SubscribeComponent},
    { path: 'list-subscribed', component: ListSubscribedComponent, canActivate: [UsuarioAutenticadoGuard]}
];


export const routing = RouterModule.forRoot(APP_ROUTES)