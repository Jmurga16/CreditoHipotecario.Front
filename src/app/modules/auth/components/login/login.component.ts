import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  User = new FormControl();
  Password = new FormControl();


  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
  }


  //#region Login
  async fnLogin() {

    let sNombreUsuario = this.User.value;
    let sContrasenia = this.Password.value;


    this.authService.Login(sNombreUsuario, sContrasenia).subscribe({
      next: (data: any) => {
        console.log(data);

        if (data == null || data.length == 0) {
          Swal.fire({
            title: `Ingrese los datos correctamente.`,
            icon: 'warning',
            timer: 1500
          });
        }

        else if (data[0].idUser > 0) {
          localStorage.setItem("username", this.User.value);
          this.router.navigate(['/inicio']);
        }
        else {
          Swal.fire({
            title: data[0].message,
            icon: 'warning',
            timer: 3500
          });
        }

      },
      error: (e) => {
        console.error(e);
      }
    });


  }
  //#endregion





}
