import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {

    this.myForm = this.formBuilder.group({
      name: [, Validators.required],
      last_name: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      photo: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).+$')]],
      password2: [, [Validators.required, this.checkPasswords]],
    })
  }

  toastrSuccess() {
    this.toastr.success("¡Bienvenido!", "Registro completado", {
      progressBar: true,
      closeButton: true,
    });
  }
  
  private checkPasswords(control: AbstractControl) {
    let resultado = {mathPassword: true}
    if (control.parent?.value.password == control.value)
      resultado = null;
    return resultado;
  }
    
  public register() {
    const user = this.myForm.value;
    console.log(user);
    this.toastrSuccess()
    this.myForm.reset();
  }
}
