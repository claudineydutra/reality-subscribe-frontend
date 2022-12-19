import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from '../interfaces/iuser';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  
  user: IUser = {
    username: "",
    password: ""
  }

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.contactForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],

    });
  }

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  onSubmit(){
    // this.user =  this.contactForm.value;
    this.usuarioService.logar(this.contactForm.value).subscribe(()=>{
      alert('logado');
      this.disabledSubmitButton = true;
    }, error =>{
      console.log('Error', error);
    });
  }


  ngOnInit(): void {
  }

}
