import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'; 
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  registerForm: FormGroup

  validation_messages = {
    email: [
      {type: "required", message: "El Email es Obligatorio"},
      {type: "pattern", message: "Email Invalido"}
    ],
    password: [
        {type: "required", message: "La Contraseña es Obligatoria"},
        {type: "minlength", message: "La Contraseña debe tener al menos 6 dígitos"}
    ],
    name: [
      {type: "required", message: "El Nombre es Obligatorio"}
    ],
    last_name: [
      {type: "required", message: "El Apellido es Obligatoria"}
    ]
  }

  constructor( private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) {

    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      )
    })
  }

 // Ocultar contraseña 
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  
  togglePasswordType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  register(registerData: any){
    console.log(registerData);
    this.authService.registerUser(registerData).then( res => { 
      this.navCtrl.navigateBack("/login");
    })
  }

  ngOnInit() {
  }

}
