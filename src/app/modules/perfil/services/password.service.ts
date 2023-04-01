import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PasswordService {

    url: string = environment.ApiURL

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {

    }

    //#region Iniciar Sesión
    ChangePassword(userName: any, oldPassword: string, newPassword: string): Observable<any> {
        const urlEndPoint = this.url + 'api/Perfil/change-password';
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        const params = {
            userName: userName,
            oldPassword: oldPassword,
            newPassword: newPassword
        };

        return this.httpClient.post(urlEndPoint, JSON.stringify(params), { headers: httpHeaders });
    }
    //#endregion


}
