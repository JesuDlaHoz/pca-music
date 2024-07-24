import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    console.log("Cerrar Menu");
    this.menu.close()
  }

  async logout() {
  console.log("Cerrar Sesion");
  //await this.storage.set("isUserLoggedIn", false); // Cambiar el estado de logueado a falso
  await this.storage.remove("isUserLoggedIn"); // Eliminar el estado de logueado del almacenamiento
  this.navCtrl.navigateRoot("/login")
  }

}
