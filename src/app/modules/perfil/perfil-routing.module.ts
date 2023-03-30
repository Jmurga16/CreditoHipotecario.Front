import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';


const routes: Routes = [
    {
        path: "",
        component: PerfilComponent,
        children: [
            /* {
                path: "personal",
                component: PersonalComponent,
                data: {
                    route: "perfil/personal"
                }
            },
            {
                path: "password",
                component: PasswordComponent,
                data: {
                    route: "perfil/password"
                }
            } */
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PerfilRoutingModule { }
