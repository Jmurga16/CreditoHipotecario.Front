import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  titlePage: string = "Cambiar Contraseña"
  formPassword: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private passwordService: PasswordService,
    private router: Router
  ) {
    this.formPassword = this.formBuilder.group({
      oldPassword: ["", Validators.required],
      newPassword: ["", Validators.required],
      rePassword: ["", Validators.required]
    });
  }

  ngOnInit(): void {

  }


  fnSave() {

    let userName = localStorage.getItem("username");
    let oldPassword = this.formPassword.controls["oldPassword"].value;
    let newPassword = this.formPassword.controls["newPassword"].value;

    this.passwordService.ChangePassword(userName, oldPassword, newPassword).subscribe({
      next: (data: any) => {

        if (data == null || data.length == 0) {
          Swal.fire({
            title: `Error, por favor contacte con sistemas.`,
            icon: 'error',
            timer: 3500
          });
        }
        else if (data[0].result=="success") {
          Swal.fire({
            title: `Contraseña cambiada correctamente.`,
            icon: 'success',
            timer: 3000
          });

          this.router.navigate(['/perfil/personal']);

        }
        else if (data[0].result == "error") {

          Swal.fire({
            title: `La contraseña actual no coincide.`,
            icon: 'warning',
            timer: 3000
          });

        }
        else if (data[0].result == "repeat") {
          Swal.fire({
            title: "La nueva contraseña no puede ser igual que una usada anteriormente.",
            icon: 'warning',
            timer: 3000
          });
        }

      },
      error: (e) => {
        console.error(e);
      }
    });

  }

  //#region Validar Contraseña Vacia
  get emptyPassword() {
    let cadena = this.formPassword.controls["newPassword"].value

    return cadena == "" ? true : false

  }
  //#endregion


  //#region Validar Mayusculas
  get validateMayus() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false

    cadena.split("").forEach((element: any) => {
      if (element === element.toUpperCase()) {
        IsValid = true
      }
    });

    return IsValid
  }
  //#endregion


  //#region Validar Minusculas
  get validateMinus() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false

    cadena.split("").forEach((element: any) => {
      if (element === element.toLowerCase()) {
        IsValid = true
      }
    });

    return IsValid;
  }
  //#endregion


  //#region Validar Numeros
  get validateNumber() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false
    const isNumeric = (n: any) => !isNaN(n);

    cadena.split("").forEach((element: any) => {

      if (isNumeric(element)) {
        IsValid = true
      }
    });

    return IsValid
  }
  //#endregion


  //#region Validar Caracteres especiales
  get validateSpecial() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false
    let Patron = "[!\"·$%&/()=¿¡?'_:;,|@#€*+.]";

    cadena.split("").forEach((element: any) => {
      let result = cadena.match(Patron)
      if (result != null) {
        IsValid = true;
      }
    });

    return IsValid

  }
  //#endregion


  //#region Validar Contraseña Mayor a 10 caracteres
  get passwordLength() {
    let cadena = this.formPassword.controls["newPassword"].value

    return cadena.length > 10 ? true : false

  }
  //#endregion


  //#region Validar Contraseñas
  get validateSave() {
    let newPassword = this.formPassword.controls["newPassword"].value
    let rePassword = this.formPassword.controls["rePassword"].value
    if (newPassword == rePassword && this.validateMayus && this.validateMinus && this.validateNumber && this.validateSpecial && this.passwordLength) {
      return true
    }
    else {
      return false
    }
  }
  //#endregion



}
