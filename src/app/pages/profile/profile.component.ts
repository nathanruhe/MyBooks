import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public myUser: User;

  // constructor() {
  //   this.myUser = new User("Ruben", "Rivas Briceño", "uncorreo123@gmail.com", "urlPhoto", "123456");
  // }

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.myUser = this.userService.user;
  }

  toastrSuccess() {
    this.toastr.success("Perfil modificado correctamente", "", {
      progressBar: true,
      closeButton: true,
    });
  }

  toastrError() {
    this.toastr.error("No se ha podido modificar el perfil", "Error", {
      progressBar: true,
      closeButton: true,
    })
  }

  // enviar1(nombre: string, apellidos: string, correo: string, url: string) {

  //   console.log(nombre);
  //   this.myUser.name = nombre;
  //   this.myUser.last_name = apellidos;
  //   this.myUser.email = correo;

  //   const foto = document.querySelector(".imgPerfil") as HTMLImageElement;
  //   foto.src = url;
  //   this.myUser.photo = url;
  // }

  enviar1(form: NgForm) {
    let user = {
      nombre: 'name',
      apellidos: 'last_name',
      correo: 'email',
      url: 'photo'
    };
  
    Object.entries(user).forEach(([key, value]) => {
      const valor = form.value[key];
      if (valor) {
        this.myUser[value] = valor;
      };
    });

    this.myUser.id_user = this.userService.user.id_user;

    this.userService.edit(this.myUser).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.myUser = this.userService.user;
        console.log(resp);
        this.toastrSuccess();
      } else {
        console.log(resp);
        this.toastrError();
      };
    });
    form.reset();
  };

};