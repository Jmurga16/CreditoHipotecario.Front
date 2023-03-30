import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'inicio',
                loadChildren: () => import('../../../modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'perfil',
                loadChildren: () => import('../../../modules/perfil/perfil.module').then(m => m.PerfilModule)
            }
        ]
    },

    {
        path: '**', redirectTo: 'auth/login', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
