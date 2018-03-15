import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrincipalPage,AjustesPage} from "../index.paginas";
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

 /* constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }*/
  tabPrincipal: any;
  tabAjustes: any;

  constructor(){
    this.tabPrincipal = PrincipalPage;
    this.tabAjustes = AjustesPage;
  }
}
