import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypeUser } from 'src/app/core/enums/UserType'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  titlePage: string = "Información Personal"
  formPersonal: FormGroup

  constructor(
    private formBuilder: FormBuilder

  ) {
    this.formPersonal = this.formBuilder.group({
      email: [""],
      password: ["*****"],
      type: [""]
    });
  }

  ngOnInit(): void {


    this.formPersonal.controls["email"].setValue(localStorage.getItem("username"))

    if (localStorage.getItem("usertype") == TypeUser.webmaster.toString()) {
      this.formPersonal.controls["type"].setValue('webmaster')
    }

  }

}
