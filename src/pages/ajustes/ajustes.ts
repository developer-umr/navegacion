import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import {ModalPage} from "../index.paginas";
/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  private activarPrincipal(){
    this.navCtrl.parent.select(0);
  }

  private mostrar_modal(){
    let modal=this.modalCtrl.create(ModalPage,{nombre: "Uriel", edad: 23});
    modal.present();
    modal.onDidDismiss(parametros =>{
      if(parametros){
        console.log("Data del modal");
        console.log(parametros);
      }else{
        console.log("Se cerro el modal");
      }
      
    });
  }
}
