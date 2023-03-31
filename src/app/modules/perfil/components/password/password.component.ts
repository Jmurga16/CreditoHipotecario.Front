import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  titlePage: string = "Cambiar Contraseña"
  formPassword: FormGroup

  constructor(
    private formBuilder: FormBuilder

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

}
