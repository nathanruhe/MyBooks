import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public myUser: User;

  constructor() {
    this.myUser = new User("Ruben", "Rivas Briceño", "uncorreo123@gmail.com", "urlPhoto", "123456");
  }

  enviar1(nombre: string, apellidos: string, correo: string, url: string) {

    console.log(nombre);
    this.myUser.name = nombre;
    this.myUser.last_name = apellidos;
    this.myUser.email = correo;

    const foto = document.querySelector(".imgPerfil") as HTMLImageElement;
    foto.src = url;
    this.myUser.photo = url;
  }
}
