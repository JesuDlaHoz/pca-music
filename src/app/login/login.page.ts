import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  validation_messages = {
    email: [
      {type: "required", message: "El Email es Obligatorio"},
      {type: "pattern", message: "Email Invalido"}
    ],
    password: [
        {type: "required", message: "La Contraseña es Obligatoria"},
        {type: "minlength", message: "La Contraseña debe tener al menos 6 dígitos"}
    ]
  }
  
  errorMessage: any;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage
  ) { 

    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
          //Validators.email
        ])
      ),
      password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])
        )
    })
  }

  ngOnInit() {} 

  loginUser(dataLogin: any){
    console.log(dataLogin)
    this.authService.loginUser(dataLogin).then(res => { 
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true)
      this.navCtrl.navigateForward("/home")
    }).catch(err => {
      this.errorMessage = err;
      this.presentAlert(this.errorMessage)
    })
  }
  
  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: 'Ops hubo un Error',
      message: mss,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Ocultar contraseña 
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  
  togglePasswordType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
