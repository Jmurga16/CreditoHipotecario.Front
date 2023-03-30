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

    let cadena = "string"

    console.log(cadena.split(""))

  }

  validateMinus() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false

    cadena.split("").forEach((element: any) => {
      if (element === element.toLowerCase()) {
        IsValid = true
      }
    });

  }

  validateMayus() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false

    cadena.split("").forEach((element: any) => {
      if (element === element.toUpperCase()) {
        IsValid = true
      }
    });

  }

  validateNumber() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false

    cadena.split("").forEach((element: any) => {
      if (typeof (element) == 'number') {
        IsValid = true
      }
    });

  }



  validateSpecial() {
    let cadena = this.formPassword.controls["newPassword"].value
    let IsValid: boolean = false
    let Patron = "[!\"·$%&/()=¿¡?'_:;,|@#€*+.]";

    cadena.split("").forEach((element: any) => {
      let result = cadena.match(Patron)
      console.log(result)
      /* if (cadena.match(Patron)) {
        console.log()
      } */
    });

  }



}
