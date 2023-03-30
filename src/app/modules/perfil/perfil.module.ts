import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from "@angular/material/card";
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PasswordComponent } from './components/password/password.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    declarations: [
        PerfilComponent,
        PersonalComponent,
        PasswordComponent
    ],
    imports: [
        CommonModule,
        PerfilRoutingModule,

        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatCardModule,
        MatProgressBarModule
    ],
    exports: [RouterModule],
})
export class PerfilModule { }
