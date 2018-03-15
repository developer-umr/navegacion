import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage, Ajustes2Page} from "../pages/index.paginas";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  ajustes2:any=Ajustes2Page;
  tabs:any=TabsPage;
  constructor(platform: Platform,private menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  private abrirPagina(paginas: any){
    this.rootPage=paginas;
    this.menuCtrl.close();
  }
}

