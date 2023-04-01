import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    localStorageName = "username"
    url: string = environment.ApiURL

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {

    }

    //#region Iniciar Sesión
    Login(sNombreUsuario: string, sContrasenia: string): Observable<any> {
        const urlEndPoint = this.url + 'api/Login';
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        const params = {
            UserName: sNombreUsuario,
            Password: sContrasenia
        };

        return this.httpClient.post(urlEndPoint, JSON.stringify(params), { headers: httpHeaders });
    }
    //#endregion


    //#region Asignar Datos de Usuario
    setDataUser(user: any, data: any) {
        localStorage.setItem("username", user);

        localStorage.setItem("idUser", data[0].idUser);
        localStorage.setItem("usertype", data[0].idUserType);
        let actualDate = new Date().toString()
        localStorage.setItem("lastSession", actualDate);
    }
    //#endregion


    //#region Obtener Nombre de Usuario
    get currentUserValue(): boolean {
        let bValue: boolean = false;

      
        bValue = localStorage.getItem("username") != null ? true : false

        return bValue

    }
    //#endregion


    //#region Servicio Cerrar Sesion
    Logout() {

        localStorage.removeItem(this.localStorageName);

        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    //#endregion

}
