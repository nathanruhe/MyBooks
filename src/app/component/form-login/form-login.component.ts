import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public myForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {

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
    this.toastr.error("Usuario no encontrado", "Error", {
      progressBar: true,
      closeButton: true,
    })
  }

  public login() {
    if (this.myForm.valid) {
      this.toastrSuccess()
    } else {
      this.toastrError()
    }
    this.myForm.reset();
  }
}