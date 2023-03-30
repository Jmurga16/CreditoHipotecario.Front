import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent,

    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    exports: [RouterModule],
})
export class HomeModule { }
