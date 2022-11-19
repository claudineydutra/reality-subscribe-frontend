import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'subscribe', component: SubscribeComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES)