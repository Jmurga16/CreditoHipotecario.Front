import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from "@angular/router";

import { FormControl } from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/Menu';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  ListMenu: Menu[] = []
  Username: string | null = ""
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  checkedDemo = new FormControl(true);
  lastSession: any = ""

  lastAccess: string = ""

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private menuService: MenuService,
    private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.Username = localStorage.getItem("username")
    this.lastSession = localStorage.getItem("lastSession")


  }


  //#region Limpiar cuando se destruya la instancia
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
  //#endregion


  //#region Inicializar
  ngOnInit(): void {

    this.fnListMenu()
    this.getLastSession();
  }
  //#endregion


  //#region Listar Menu y SubMenus
  async fnListMenu() {

    let nOpcion = 1
    let pParametro: any = [];

    await this.menuService.fnServiceMenu(nOpcion, pParametro).subscribe({
      next: (data: Menu[]) => {

        let lengthLevel = data[data.length - 1].level

        //#region Menu Nivel 1
        data.forEach(element => {
          if (element.idParent == 0) {
            this.ListMenu.push(element)
          }
        });
        //#endregion

        //#region Menu Nivel 2
        this.ListMenu.forEach(element => {

          if (localStorage.getItem("usertype") != "1" && element.idMenu != 1) {
            element.show = false
          }

          data.forEach(option => {
            if (element.idMenu == option.idParent && option.level == 2) {
              if (element.subMenu == undefined) {
                element.subMenu = []
              }
              element.subMenu.push(option)
            }
          });
        });
        //#endregion
    
      },
      error: (e) => {
        console.error(e)
      }
    });


  }
  //#endregion


  //#region Cerrar Sesión
  fnLogout() {
    this.authService.Logout()
  }
  //#endregion


  //#region Ir a la Ruta
  fnRouting(route: string) {
    let sRoute = `/${route}`
    this.router.navigateByUrl(sRoute);
  }
  //#endregion


  //#region Mostrar SubMenu
  fnShowSubMenu(index: number) {

    let statusShow: boolean;

    if (this.ListMenu[index].show) {
      statusShow = false;
    }
    else {
      statusShow = true;
    }

    this.ListMenu[index].show = statusShow
  }

  //#endregion


  //#region Obtener Ruta Actual de Componente
  get getRouterURL() {
    var routerURL = this.router.url.slice(1)

    return routerURL
  }
  //#endregion 


  //#region Obtener Fecha ultimo acceso
  getLastSession() {
    let objectDate = new Date(this.lastSession);

    let day = objectDate.getDate().toString().padStart(2, "0");
    let month = objectDate.getMonth() + 1;
    let year = objectDate.getFullYear();

    let format1 = day + "-" + month.toString().padStart(2, "0") + "-" + year;

    let hour = objectDate.getHours();
    let minutes = objectDate.getMinutes().toString().padStart(2, "0");

    let time = hour + ":" + minutes;

    this.lastAccess = "Fecha de último acceso: " + format1 + " / " + time

  }
  //#endregion

}
