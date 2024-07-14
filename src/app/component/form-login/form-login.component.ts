import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public myForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private userService: UserService, private router: Router) {

    this.myForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).+$')]],
    })
  }

  toastrSuccess() {
    this.toastr.success("Bienvenido de nuevo", "Sesión iniciada", {
      progressBar: true,
      closeButton: true,
    });
  }

  toastrError() {
    this.toastr.error("Los datos introducidos no son válidos", "Error", {
      progressBar: true,
      closeButton: true,
    })
  }

  // public login() {
  //   if (this.myForm.valid) {
  //     this.toastrSuccess()
  //   } else {
  //     this.toastrError()
  //   }
  //   this.myForm.reset();
  // }

  public login() {
    const user = this.myForm.value;

    this.userService.login(user).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.userService.logueado = true;
        this.userService.user = resp.dataUser;
        this.router.navigateByUrl("/books");
        console.log(resp);
        this.toastrSuccess();
      } else {
        console.log(resp);
        this.toastrError();
      };
    });
    this.myForm.reset();
  };


  
}